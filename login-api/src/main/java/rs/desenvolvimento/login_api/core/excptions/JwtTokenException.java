package rs.desenvolvimento.login_api.core.excptions;

public class JwtTokenException extends RuntimeException {
  public JwtTokenException(String message) {
    super(message);
  }
}

