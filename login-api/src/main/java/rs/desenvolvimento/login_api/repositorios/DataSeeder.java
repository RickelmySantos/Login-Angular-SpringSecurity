package rs.desenvolvimento.login_api.repositorios;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import rs.desenvolvimento.login_api.modelos.entidades.Roles;
import rs.desenvolvimento.login_api.modelos.enums.ERole;

@Component
public class DataSeeder {
  private final RoleRepository roleRepository;

  public DataSeeder(RoleRepository roleRepository) {
    this.roleRepository = roleRepository;
  }

  @PostConstruct
  public void init() {
    for (ERole role : ERole.values()) {
      this.roleRepository.findByName(role).orElseGet(() -> {
        Roles newRole = Roles.builder().name(role).build();
        return this.roleRepository.save(newRole);
      });
    }
  }
}
