package rs.desenvolvimento.login_api.core.excptions;

public class UsuarioException extends RuntimeException {

  private static final long serialVersionUID = 1L;

  public UsuarioException(String message) {
    super(message);
  }

}
