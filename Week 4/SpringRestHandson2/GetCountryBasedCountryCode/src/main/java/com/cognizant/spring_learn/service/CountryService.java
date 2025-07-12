package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.InputStream;
import java.util.List;

@Service
public class CountryService {

    private List<Country> countryList;

    @PostConstruct
    public void init() throws Exception {
        XmlMapper xmlMapper = new XmlMapper();
        InputStream inputStream = getClass().getResourceAsStream("/country.xml");
        Countries countries = xmlMapper.readValue(inputStream, Countries.class);
        countryList = countries.getCountryList();
    }

    public Country getCountry(String code) {
        return countryList.stream()
            .filter(c -> c.getCode().equalsIgnoreCase(code))
            .findFirst()
            .orElse(null); // Or throw an exception if preferred
    }

    // Wrapper class to read XML list
    private static class Countries {
        @com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper(useWrapping = false)
        @com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty(localName = "country")
        private List<Country> countryList;

        public List<Country> getCountryList() {
            return countryList;
        }

        public void setCountryList(List<Country> countryList) {
            this.countryList = countryList;
        }
    }
}
