package com.cognizant.spring_learn.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

public class Country {

    @JacksonXmlProperty(localName = "code")
    private String code;

    @JacksonXmlProperty(localName = "name")
    private String name;

    // Getters and Setters

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
