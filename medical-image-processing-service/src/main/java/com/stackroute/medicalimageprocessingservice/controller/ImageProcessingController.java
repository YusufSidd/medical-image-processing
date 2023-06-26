package com.stackroute.medicalimageprocessingservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.awt.image.BufferedImage;

import java.io.IOException;

@Controller
@RequestMapping("/image")
public class ImageProcessingController {

    @GetMapping
    public String showImageProcessingForm() {
        return "image-form";
    }

    @PostMapping("/process")
    public String processImage(@RequestParam("file") MultipartFile file, Model model) {
        if (!file.isEmpty()) {
            try {
                // Load the image using JAI
                PlanarImage image = JAI.create("fileload", file.getInputStream());

                // Perform image processing operations
                // Example: Convert the image to grayscale
                BufferedImage processedImage = image.getAsBufferedImage();

                // Add the processed image to the model
                model.addAttribute("processedImage", processedImage);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return "image-form";
    }
}

