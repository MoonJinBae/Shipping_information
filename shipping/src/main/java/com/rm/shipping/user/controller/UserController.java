package com.rm.shipping.user.controller;

import com.rm.shipping.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user/*")
@Slf4j
public class UserController {

    private final UserService userService;
    @GetMapping("login")
    public void getLogin(){}

    @PostMapping("login")
    public String postLogin(){

        return "index";
    }

}
