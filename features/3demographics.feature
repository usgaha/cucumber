@verifydemographs
Feature:Demographics verification
    Scenario:Verification of View More contents
        Then click on Members Tab
            | TabName  |
            | Overview |
        Then user clicks on view More
            | section | Demographics |
        Then user verifies page text
            | text | Demographics |
        Then verify button is clickable or not
            | button_text | Edit |
        Then verify icon is clickable or not
            | icon | close |
    Scenario:verification for mandatory fields text
        Then verify mandatory fields text
            | First Name                | First Name: *                |
            | Last Name                 | Last Name: *                 |
            | Gender\n(Assigned at Birth | Gender (Assigned at Birth):* |
    Scenario:verification for sub text in demographics page
        Then verify sub text in demographics page
            | text  | Basic Information                 |
            | text2 | Additional Information (optional) |
            | text3 | English Proficiency               |
    Scenario:verification for details of user
        Then verify details of user
            | First Name                | CMMR                                        |
            | Middle Name               | AUTO                                        |
            | Last Name                 | CCMR                                        |
            | Date of Birth             | 01/31/1958                                  |
            | Gender\n(Assigned at Birth | Male                                        |
            | Gender Identity           | Male                                        |
            | Pronoun                   | Other                                       |
            | Sexual Orientation        | Asexual                                     |
            | Martial Status            | Single                                      |
            | Ethnicity                 | Declined to Specify                         |
            | Race                      | Asian                                       |
            | Primary Language          | Arabic                                      |
            | Lead Type                 | Cold Referral                               |
            | Lead Source               | Email                                       |
            | Housing Status            | Living with parents/caregiver/family member |
            | Religious Affiliation     | None                                        |
            | Member has minor          | No                                          |
            | Discretion                | No                                          |
            | Physical Description      | has curly hair and is tanned.               |
            | Read                      | Yes                                         |
            | Write                     | Yes                                         |
            | Speak                     | Yes                                         |
    Scenario:close the page
        Then close the page

