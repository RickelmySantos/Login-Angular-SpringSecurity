package rs.desenvolvimento.login_api.sevices;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import rs.desenvolvimento.login_api.core.excptions.UsuarioException;
import rs.desenvolvimento.login_api.core.seguranca.JwtUtil;
import rs.desenvolvimento.login_api.modelos.dtos.UserDto;
import rs.desenvolvimento.login_api.modelos.entidades.Roles;
import rs.desenvolvimento.login_api.modelos.entidades.User;
import rs.desenvolvimento.login_api.modelos.enums.ERole;
import rs.desenvolvimento.login_api.repositorios.RoleRepository;
import rs.desenvolvimento.login_api.repositorios.UserRepository;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final RoleRepository roleRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtUtil jwtUtil;

  public AuthService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder,
      JwtUtil jwtUtil) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtUtil = jwtUtil;
  }

  public String autenticacao(String username, String password) {
    Optional<User> user = this.userRepository.findByUsername(username);
    if (user.isPresent() && this.passwordEncoder.matches(password, user.get().getPassword())) {
      return this.jwtUtil.geracaoJwtToken(username);
    }
    throw new UsuarioException("Credenciais inválidas");
  }

  public UserDto registrar(UserDto userDto) {
    this.verificaSeUsuarioExiste(userDto.getUsername());

    Set<Roles> roles = this.roles(userDto.getRoles());

    User user = User.builder().username(userDto.getUsername())
        .password(this.passwordEncoder.encode(userDto.getPassword())).roles(roles).build();
    User usuarioSalvo = this.userRepository.save(user);

    return this.userToUserDto(usuarioSalvo);
  }

  private Set<Roles> roles(Set<ERole> roles) {
    return roles.stream().map(this::findRoleByName).collect(Collectors.toSet());
  }

  private Roles findRoleByName(ERole role) {
    return this.roleRepository.findByName(role).orElseThrow(() -> new RuntimeException("Role não encontrada: " + role));
  }

  private void verificaSeUsuarioExiste(String username) {
    if (this.userRepository.findByUsername(username).isPresent()) {
      throw new UsuarioException("Usuário já existe");
    }
  }

  private UserDto userToUserDto(User user) {
    return UserDto.builder().username(user.getUsername()).password(user.getPassword()).build();
  }
}
