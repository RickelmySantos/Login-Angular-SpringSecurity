package rs.desenvolvimento.login_api.repositorios;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import rs.desenvolvimento.login_api.modelos.entidades.User;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
}
