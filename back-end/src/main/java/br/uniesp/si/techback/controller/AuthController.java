package br.uniesp.si.techback.controller;

import br.uniesp.si.techback.dto.auth.AuthResponseDTO;
import br.uniesp.si.techback.dto.auth.LoginRequestDTO;
import br.uniesp.si.techback.dto.auth.RegisterRequestDTO;
import br.uniesp.si.techback.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public AuthResponseDTO login(@Valid @RequestBody LoginRequestDTO request) {
        return authService.login(request);
    }

    @PostMapping("/register")
    public AuthResponseDTO register(@Valid @RequestBody RegisterRequestDTO request) {
        return authService.register(request);
    }

    @GetMapping("/me")
    public AuthResponseDTO me(Authentication authentication) {
        return authService.me(authentication.getName());
    }
}
