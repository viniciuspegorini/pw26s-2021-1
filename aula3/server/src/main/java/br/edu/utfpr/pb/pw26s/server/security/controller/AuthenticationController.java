package br.edu.utfpr.pb.pw26s.server.security.controller;

import br.edu.utfpr.pb.pw26s.server.AppConstant;
import br.edu.utfpr.pb.pw26s.server.model.Usuario;
import br.edu.utfpr.pb.pw26s.server.security.TokenUtils;
import br.edu.utfpr.pb.pw26s.server.security.model.AuthenticationRequest;
import br.edu.utfpr.pb.pw26s.server.security.model.AuthenticationResponse;
import br.edu.utfpr.pb.pw26s.server.service.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private TokenUtils tokenUtils;
	
	@Autowired
	private UsuarioServiceImpl usuarioService;
	
	@PostMapping(value = "")
	public ResponseEntity<?> authenticationRequest(
			@RequestBody AuthenticationRequest a) 
			throws AuthenticationException{
		
		Authentication authentication = this.authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(a.getUsername(), a.getPassword())
				); // {"username" : "admin", "password" : "123"}
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		UserDetails userDetails = this.usuarioService.loadUserByUsername(a.getUsername());
		String token = this.tokenUtils.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(token)); // {"token" : "AIUuadsa82asdn"}
	}
	
	@GetMapping(value = "refresh")
	public ResponseEntity<?> authenticationRequest(
			HttpServletRequest request){
		String token = request.getHeader(AppConstant.TOKEN_HEADER);
		String username = this.tokenUtils.getUsernameFromToken(token);
		
		Usuario u  = (Usuario) this.usuarioService.loadUserByUsername(username);
		
		if (this.tokenUtils.canTokenBeRefreshed(token, u.getLastPasswordReset())) {
			String refreshedToken = this.tokenUtils.refreshToken(token);
			
			return ResponseEntity.ok(new AuthenticationResponse(refreshedToken));
		} else {
			return ResponseEntity.badRequest().body(null);			
		}
	}
	
}






