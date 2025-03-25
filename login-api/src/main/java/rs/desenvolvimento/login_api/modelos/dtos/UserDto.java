package rs.desenvolvimento.login_api.modelos.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
  @NotBlank
  private String username;
  @Email
  private String email;
  @NotNull
  private String password;
  @NotNull
  private Set<ERole> roles;
}
