package com.news.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final String API_KEY = "847823ade07f4e168b6a61babc8ac4f0";
    private final String BASE_URL = "https://newsapi.org/v2/top-headlines";

    @GetMapping("/{country}")
    public ResponseEntity<?> getNewsByCountry(@PathVariable String country) {
        String url = BASE_URL + "?country=" + country + "&apiKey=" + API_KEY;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return ResponseEntity.ok(response.getBody());
    }
}
