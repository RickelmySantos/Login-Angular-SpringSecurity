package rs.desenvolvimento.login_api.modelos.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import rs.desenvolvimento.login_api.modelos.enums.ERole;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RolerDto {
  private Long id;
  private ERole role;
}
