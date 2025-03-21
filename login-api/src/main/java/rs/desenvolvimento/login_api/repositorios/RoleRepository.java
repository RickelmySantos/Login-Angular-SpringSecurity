package rs.desenvolvimento.login_api.repositorios;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import rs.desenvolvimento.login_api.modelos.entidades.Roles;
import rs.desenvolvimento.login_api.modelos.enums.ERole;

public interface RoleRepository extends JpaRepository<Roles, Long> {

  Optional<Roles> findByName(ERole name);

}
