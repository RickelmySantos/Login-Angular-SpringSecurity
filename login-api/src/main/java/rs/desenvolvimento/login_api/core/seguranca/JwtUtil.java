package rs.desenvolvimento.login_api.core.seguranca;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import rs.desenvolvimento.login_api.core.excptions.JwtTokenException;
import rs.desenvolvimento.login_api.modelos.entidades.Roles;
import rs.desenvolvimento.login_api.modelos.enums.ERole;

@Component
public class JwtUtil {

  private SecretKey jwtSecret;
  private final long expiration;

  public JwtUtil(@Value("${jwt.secret}") String secretKey,
      @Value("${jwt.expiration}") long expiration) {
    this.jwtSecret = Keys.hmacShaKeyFor(secretKey.getBytes());
    this.expiration = expiration;
  }

  public String geracaoJwtToken(String username) {
    return Jwts.builder().subject(username).issuedAt(new Date())
        .expiration(new Date(System.currentTimeMillis() + this.expiration))
        .signWith(this.jwtSecret)
        .compact();
  }

  public Boolean validacaoToken(String authToken) {
    try {
      Jwts.parser().verifyWith(this.jwtSecret).build().parseSignedClaims(authToken);
      return true;
    } catch (Exception e) {
      throw new JwtTokenException("Token inválido");
    }
  }

  public String obterUsernameJwtToken(String token) {
    try {
      return Jwts.parser().verifyWith(this.jwtSecret).build().parseSignedClaims(token).getPayload()
          .getSubject();
    } catch (ExpiredJwtException e) {
      throw new JwtTokenException("Token expirado! por favor faça login novamente");
    } catch (UnsupportedJwtException | MalformedJwtException e) {
      throw new JwtTokenException("Token inválido ! Autenticação falhou");
    } catch (Exception e) {
      throw new JwtTokenException("Autenticação falhou" + e.getMessage());
    }
  }

  public String gerarToken(String username, Set<Roles> roles) {
    List<ERole> rolesName = roles.stream().map(Roles::getName).collect(Collectors.toList());

    return Jwts.builder().subject(username).claim("roles", rolesName).issuedAt(new Date())
        .expiration(new Date(System.currentTimeMillis() + this.expiration)).signWith(this.jwtSecret).compact();
  }

  public Claims getClaims(String token) {
    return Jwts.parser().verifyWith(this.jwtSecret)
        .build()
        .parseSignedClaims(token)
        .getPayload();
  }
}
