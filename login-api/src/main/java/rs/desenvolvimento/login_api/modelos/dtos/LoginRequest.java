package rs.desenvolvimento.login_api.modelos.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
  private String username;
  private String password;
}
