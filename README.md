## Problem Statement



## MVP
**Kit List**  An emergency preparedness shopping list generator
- Takes name, number of people in household, number of pets in household, basic elements (heat/snow), medication and generates personalized list based on user profile and number of days selected
- Persistent user data saved in database
- FEMA or Red Cross blog rss or Twitter Feed (API)
- ESRI Disaster Map (API)


## Stretch Goals
- Local agency contact info (FEMA / Red Cross)
- Update user info 
- Historical disaster declarations map
- Pet specificity
- Save user location and link


## Objects / Methods

**User**
User = {
    name: string,
    householdSize: number,
    number of days: number *set minimum to 3*
    medication: boolean,
    type: array [base, heat, snow, pets, infant, child] *if true, form pushes the type to this array*
    }

**Item**
Item = {
    item: string,
    type: string, (base, heat, snow)
    amount: number (string?)
}

**Lists**
- base (FEMA recommendations)
    - water x number of people (1 gallon)
    - pet supplies x number of pets (if pets = true petTemplate.show())
    - medications (if medications = true medTemplate.show())
- heat (if extremeHeat = true heatTemplate.show())
- snow (if snow = true snowTemplate.show())


## Schema
**User** 
```
+---------+------+----------------+------+------------+------+------+------+--------+-------+
| user_id | name | household_size | days | medication | heat | snow | pets | infant | child |
+---------+------+----------------+------+------------+------+------+------+--------+-------+
```
**Items**
```
+---------+----------------------------------------------+------+-----------------------------------------+
| item_id | type (base, heat, snow, pets, infant, child) | item | amount (recommended per person per day) |
+---------+----------------------------------------------+------+-----------------------------------------+
```
**Join** 
- many-to-many relationship; will be made for each user and purchased
- On will be updated when user clicks item off; include item name and use this to populate each user's list. 
- How to capture date of click?
```
+---------+---------+------+-------------+
| user_id | item_id | item | purchasedOn |
+---------+---------+------+-------------+
```


## Routes
- home
- about
- list
- map
- update (stretch)


## Event Listeners
*list not complete*
- Form submit
    - creates user object instance 
    - POST request
    - directs to list
