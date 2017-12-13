## Problem Statement



## MVP
**Kit List**  An emergency preparedness shopping list generator
- Takes name, number of people in household, number of pets in household, basic elements (heat/snow), medication and generates personalized list based on user profile and number of days selected
- Persistent user data saved in database
- FEMA or Red Cross blog rss or Twitter Feed (API)
- ESRI Disaster Map (API)


## Stretch Goals
- Local agency contact inf0 (FEMA / Red Cross)
- Historical disaster declarations map
- Pet specificity
- Save user location and link  


## Objects / Methods

**User Profile**
User = {
    name: string,
    householdSize: number,
    heat: boolean
    snow: boolean
    medication: boolean
    pets: number,
    number of days: number (set minimum to 3)
    }

**Lists**
- base (FEMA recommendations)
    - water x number of people (1 gallon)
- user 
    - pet supplies x number of pets (if pets = true petTemplate.show())
    - medications (if medications = true medTemplate.show())
- weather
    - hot (if extremeHeat = true hotTemplate.show())
    - snow (if snow = true snowTemplate.show())


## Schema
**User**
---------------------------------------------------------------
| user | # of people | heat | snow | medication | pets | days |
---------------------------------------------------------------

**List**

id | condition (base, snow or heat) | item | amount (recommended per person per day)
