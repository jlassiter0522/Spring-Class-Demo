
package com.example.demo.controller;
import java.util.*;

import com.example.demo.domain.NASAPI;
import com.example.demo.domain.NASAList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/NASA")
public class NASAController {
    
    @GetMapping("/Specific_Date")
     public NASAPI nasaPOD(@RequestParam (value ="date", defaultValue = "") String date){
     RestTemplate nasaTemp = new RestTemplate();
     NASAPI result = nasaTemp.getForObject("https://api.nasa.gov/planetary/apod?api_key=HrgUnKEFOtxVlQkjXZvMtLyNfSnstgpnsLHcd83N&date=" + date, NASAPI.class);
        return result; 
    }

    
    @GetMapping("/Count")
     public NASAList nasaCount(@RequestParam (value ="count", defaultValue = "") String count){
     RestTemplate nasaCounter = new RestTemplate();
     NASAList countResult = nasaCounter.getForObject("https://api.nasa.gov/planetary/apod?api_key=HrgUnKEFOtxVlQkjXZvMtLyNfSnstgpnsLHcd83N&count=" + count, NASAList.class);
        return countResult; 
    }
    @GetMapping("/Range_date")
        public NASAList nasaRange(@RequestParam(value="start_date", defaultValue= "") String start_date, @RequestParam(value="end_date", defaultValue="") String end_date){
            RestTemplate nasaRangeTemp = new RestTemplate();
            NASAList rangeResult = nasaRangeTemp.getForObject("https://api.nasa.gov/planetary/apod?api_key=HrgUnKEFOtxVlQkjXZvMtLyNfSnstgpnsLHcd83N&start_date=" + start_date + "&end_date=" + end_date, NASAList.class);
            return rangeResult;
        }
    @GetMapping("/Thumb")
        public NASAPI nasaThumb(@RequestParam(value= "thumbs", defaultValue="false") boolean thumbs){
            RestTemplate nasaThumbTemp = new RestTemplate();
            NASAPI thumbResult = nasaThumbTemp.getForObject("https://api.nasa.gov/planetary/apod?api_key=HrgUnKEFOtxVlQkjXZvMtLyNfSnstgpnsLHcd83N&thumbs=" + thumbs, NASAPI.class);
            return thumbResult;
        }
     
    }