package rs.desenvolvimento.login_api.modelos.dtos;

import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import rs.desenvolvimento.login_api.modelos.enums.ERole;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
  private Long id;
  private String username;
  private String password;
  private Set<ERole> roles;
}
