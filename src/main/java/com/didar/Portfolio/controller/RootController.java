package com.didar.Portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {
    @GetMapping
    public String portfolio(){
        return "index";
    }
}
