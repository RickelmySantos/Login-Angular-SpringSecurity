package rs.desenvolvimento.login_api.controladores;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.desenvolvimento.login_api.modelos.dtos.LoginRequest;
import rs.desenvolvimento.login_api.modelos.dtos.LoginResponse;
import rs.desenvolvimento.login_api.modelos.dtos.UserDto;
import rs.desenvolvimento.login_api.sevices.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {
  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/login")
  public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
    String token = this.authService.autenticacao(request.getUsername(), request.getPassword());
    return ResponseEntity.ok(new LoginResponse(request.getUsername(), token));
  }

  @PostMapping("/cadastrar")
  public ResponseEntity<UserDto> cadastrar(@RequestBody UserDto userDto) {
    UserDto usuarioSalvo = this.authService.registrar(userDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(usuarioSalvo);
  }
}
