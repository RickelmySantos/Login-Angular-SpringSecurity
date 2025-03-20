package rs.desenvolvimento.login_api.sevices;

import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import rs.desenvolvimento.login_api.core.seguranca.JwtUtil;
import rs.desenvolvimento.login_api.modelos.dtos.UserDto;
import rs.desenvolvimento.login_api.modelos.entidades.User;
import rs.desenvolvimento.login_api.repositorios.UserRepository;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtUtil jwtUtil;

  public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder,
      JwtUtil jwtUtil) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtUtil = jwtUtil;
  }

  public String autenticacao(String username, String password) {
    Optional<User> user = this.userRepository.findByUsername(username);
    if (user.isPresent() && this.passwordEncoder.matches(password, user.get().getPassword())) {
      return this.jwtUtil.geracaoJwtToken(username);
    }
    throw new RuntimeException("Credenciais inválidas");
  }

  public UserDto registrar(UserDto userDto) {
    if (this.userRepository.findByUsername(userDto.getUsername()).isPresent()) {
      throw new RuntimeException("Usuário já existe");
    }
    User user = User.builder().username(userDto.getUsername())
        .password(this.passwordEncoder.encode(userDto.getPassword())).build();
    User usuarioSalvo = this.userRepository.save(user);

    return this.userToUserDto(usuarioSalvo);
  }


  private UserDto userToUserDto(User user) {
    return UserDto.builder().username(user.getUsername()).password(user.getPassword()).build();
  }
}
