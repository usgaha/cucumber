@unifiedmmr
Feature: Unified Mrr
    Scenario: login with valid credintials
        Given user navigates to mmr web
            | url | https://mmr-unified.mindoula.com/ |
        Then user gives email as "ramacare@mind.com"
        Then user gives password as "Test@123"
        Then user clicks on submit button
    @addmember
    Scenario: Create A New Member
        # Then opens left navigation menu
        Then user clicks on Members
        Then close left navigation menu
        Then click on Add Member
        Then Enter data in Add Member Page with all details
            | fname | mname | lname   | email                        | TYPE   | BELONG_TO | mobile     | dob        | Housing_status                              | Religious_Affiliation | gender | marital_status | address                               | home_phone | office_phone | pname | GENDER_IDENTITY | PRONOUN | SEXUAL_ORIENTATION | MARITAL_STATUS | PRIMARY_LANGUAGE | TIME_ZONE                  | ETHNICITY           | RACE  | LEAD_TYPE     | LEAD_SOURCE | Read | Write | Speak | Note                          |
            | CCMR  | AUTO  | MEMBER1 | MMRAUTO.MEMBER1@mindoula.com | Mobile | Member    | 2125618000 | 01/31/1958 | Living with parents/caregiver/family member | None                  | Male   | Single         | 11529 170th St Jamaica NY, 11434, USA | 2125618001 | 2125618002   | REG   | Male            | He/Him  | Asexual            | Annulled       | Arabic           | Pacific Time (US & Canada) | Declined to Specify | Asian | Cold Referral | Email       | Yes  | Yes   | Yes   | has curly hair and is tanned. |

    @addprogram
    Scenario: Add a New Program
        Then click on Quick Add
        Then select tab in list
            | section | Program |
        # Then Navigate to Provider Look Up
        # Then Enter data in Add Program Provider Look Up Page
        #     | PARENT_PROGRAM | program                                        | Member_Type | practice | identified_on | provider | EMR_ID  | status  | verbal_date | written_date | written_document       | roi_date | roi_document           | medicaid | insurance_note          | readmission_date | readmission_discharge_date | admission_reason | hospital             | alt_identifier          | admission_valid | Member Type |
        #     | Other          | MindoulaCare  - Amerihealth Caritas (LA) - FFS | Participant | Test     | 06152019      | Rahul    | A534534 | Pending | 06162019    | 06172019     | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019         | 06202019                   | Psychiatric      | Bon Secours Hospital | text for alt identifier | Yes             |             |
        Then Navigate to Program Look Up
        Then Enter data in Add Program page
            | PARENT_PROGRAM | program                                       | Member_Type | practice | identified_on | provider | EMR_ID   | status  | verbal_date | written_date | written_document       | roi_date | roi_document           | medicaid | insurance_note          | readmission_date | readmission_discharge_date | admission_reason | hospital             | alt_identifier          | admission_valid | Member Type |
            | Other          | MindoulaCare - Amerihealth Caritas (LA) - FFS | Participant | Test     | 06152019      | Rahul    | CMR34534 | Pending | 06162019    | 06172019     | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019         | 06202019                   | Psychiatric      | Bon Secours Hospital | text for alt identifier | Yes             |             |
        Then click on Save button
    @verification_of_contents_in_Quick_add
    Scenario:verification of headers in Quick Add
        Then click on Quick Add
        Then verify header of quick add
            | header1 | PLANS   |
            | header2 | CONTACT |
            | header3 | NOTES   |
    @verification_of_buttons_in_Quickadd
    Scenario:verification of buttons in Quick Add
        Then verify buttons in Quick Add
            | icons            | buttonname   |
            | program-list     | Program      |
            | tag              | Tag          |
            | health-heart     | Allergies    |
            # | service          | Service      |
            # | document-service | Service      |
            | recovery-plan    | Recovery     |
            | safetyplan       | Safety       |
            | phone            | Phone Number |
            | email            | Email        |
            | location         | Address      |
            | star-icon        | Important    |
            | dollar-sign      | Billing      |
    Scenario:close Quick add
        Then close Quick Add
    @verification_of_viewall_contents
    Scenario:verification of View All tabs
        Then click on View all
        Then verify Menu Contents in View All
            | tab1  | Assessments         |
            | tab2  | Benefits/Documents  |
            | tab3  | Billing             |
            | tab4  | Care Gaps           |
            | tab5  | Care Team           |
            | tab6  | Consults            |
            | tab7  | Content             |
            | tab8  | Diagnoses           |
            | tab9  | Documents           |
            | tab10 | Employment & Income |
            | tab11 | Goals               |
            | tab12 | Hospital Visits     |
            | tab13 | Impacts             |
            | tab14 | Insurance           |
            | tab15 | Pregnancy           |
            | tab16 | Recovery Plan       |
            | tab17 | Referrals           |
            | tab18 | Safety Plan         |
            | tab19 | Service Plan        |
            | tab20 | Utilization         |
            | tab21 | Programs            |


