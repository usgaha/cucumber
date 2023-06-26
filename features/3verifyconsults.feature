@consultsVerify
Feature: complete consults UI verification
    Scenario:verification for consults Add page UI
        Then click on View all
        Then click on tab
            | Tab | Consults |
    Scenario:verification for programs tab text
        Then verify programs tab text
            | text | MindoulaCare - Amerihealth Caritas (LA) - FFS |
    Scenario:verification for footer text of programs tab
        Then verify footer text of programs tab
            | ITEM1 | Pending:    |
            | ITEM2 | Identified: |
    Scenario: verify header text
        Then verify header text of consults page
            | text | Consults |
    Scenario:avatar verify
        Then verify avatar exists in member header
            | data | CC |
    Scenario:tabs text verify
        Then verify tabs text
            | item1  | Overview        |
            | item2  | Assessments     |
            | item3  | Billing         |
            | item4  | Consults        |
            | item5  | Documents       |
            | item6  | Goals           |
            | item7  | Hospital Visits |
            | item8  | Pregnancy       |
            | item9  | Referrals       |
            | item10 | Utilization     |
    Scenario:copy member details
        Then copy member details
            | name  |  |
            | EMRID |  |
            | DOB   |  |
            | State |  |
    Scenario:verification for member details
        Then verify member details with copied member details
            | name    | REG (He/Him, 65) CMMR CCMR           |
            | emrid   | CMR34534                             |
            | dob     | 01/31/58                             |
            | address | 11529 170th St Jamaica NY 11434-1841 |
    Scenario:verification of left member panel
        Then verify left side member panel contents
            | languageIcon,Arabic | YES |
            | member-contact      | YES |
            | chat-member         | YES |
            | sms-text            | YES |
            | Tasks               | YES |
            | Case Notes          | YES |
            | Engagements         | YES |

    Scenario:verification for button text
        Then verify button text
            | button_text | Add Consult |
    Scenario:verification for button is clickable or not
        Then verify button is clickable or not
            | button_text | Add Consult |
    Scenario:click on button
        Then click on button
            | button_text | Add Consult |
    Scenario: verify header text of consults edit page
        Then verify header text of consults edit page
            | text1 | Consults            |
            | text2 | Diagnoses *         |
            | text3 | Measurement Plans * |
    Scenario:verification for header text of dropdown
        Then verify header text of dropdown
            | text | Consult Type |
    Scenario:verification for text in dropdown combobox
        Then verify text in dropdown combobox
            | text | Intake |
    Scenario: verify status
        Then verify status
            | status | Draft |
    Scenario:verification for button is clickable or not
        Then verify button is clickable or not
            | button_text | Publish |
    Scenario:verification for buttons text in consult edit page
        Then verify button text
            | button_text1 | Add Diagnosis        |
            | button_text2 | Add Measurement Plan |
            | button_text3 | Publish              |
            | button_text4 | Discard              |
    Scenario:verification for text in empty contailer
        Then verify text in empty contailer
            | container_text_in_diagnosis   | No Diagnosis Added. Please\nadd\nthis mandatory information.         |
            | container_text_in_measurement | No Measurement Plans Added. Please\nadd\nthis mandatory information. |
    Scenario:verification for notes heading
        Then verify notes heading
            | heading_text1 | Brief Clinical Summary *                             |
            | heading_text2 | Clinical Impression                                  |
            | heading_text3 | Recommendations for Provider *                       |
            | heading_text4 | Recommendations for Behavioral Health Care Manager * |
            | heading_text5 | Additional Areas for Review                          |
    Scenario:verification for contents in text editor
        Then user verifies contents of a text editor
            | header             | Brief Clinical Summary * |
            | speech-recognition | YES                      |
            | Bold               | YES                      |
            | Italic             | YES                      |
            | Strikethrough      | YES                      |
            | Font Size          | YES                      |
            | Font Color         | YES                      |
            | Highlight          | YES                      |
            | Bulleted List      | YES                      |
            | Numbered List      | YES                      |
            | Insert table       | YES                      |
            | Undo               | YES                      |
            | Redo               | YES                      |
    Scenario:verification for contents in text editor
        Then user verifies contents of a text editor
            | header             | Clinical Impression |
            | speech-recognition | YES                 |
            | Bold               | YES                 |
            | Italic             | YES                 |
            | Strikethrough      | YES                 |
            | Font Size          | YES                 |
            | Font Color         | YES                 |
            | Highlight          | YES                 |
            | Bulleted List      | YES                 |
            | Numbered List      | YES                 |
            | Insert table       | YES                 |
            | Undo               | YES                 |
            | Redo               | YES                 |
    Scenario:verification for contents in text editor
        Then user verifies contents of a text editor
            | header             | Recommendations for Provider * |
            | speech-recognition | YES                            |
            | Bold               | YES                            |
            | Italic             | YES                            |
            | Strikethrough      | YES                            |
            | Font Size          | YES                            |
            | Font Color         | YES                            |
            | Highlight          | YES                            |
            | Bulleted List      | YES                            |
            | Numbered List      | YES                            |
            | Insert table       | YES                            |
            | Undo               | YES                            |
            | Redo               | YES                            |
    Scenario:verification for contents in text editor
        Then user verifies contents of a text editor
            | header             | Recommendations for Behavioral Health Care Manager * |
            | speech-recognition | YES                                                  |
            | Bold               | YES                                                  |
            | Italic             | YES                                                  |
            | Strikethrough      | YES                                                  |
            | Font Size          | YES                                                  |
            | Font Color         | YES                                                  |
            | Highlight          | YES                                                  |
            | Bulleted List      | YES                                                  |
            | Numbered List      | YES                                                  |
            | Insert table       | YES                                                  |
            | Undo               | YES                                                  |
            | Redo               | YES                                                  |
    Scenario:verification for contents in text editor
        Then user verifies contents of a text editor
            | header             | Additional Areas for Review |
            | speech-recognition | YES                         |
            | Bold               | YES                         |
            | Italic             | YES                         |
            | Strikethrough      | YES                         |
            | Font Size          | YES                         |
            | Font Color         | YES                         |
            | Highlight          | YES                         |
            | Bulleted List      | YES                         |
            | Numbered List      | YES                         |
            | Insert table       | YES                         |
            | Undo               | YES                         |
            | Redo               | YES                         |
    Scenario:verification for text in empty notes
        Then verify text in empty notes
            | Brief Clinical Summary                               | Notes here.... |
            | Clinical Impression                                  | Notes here.... |
            | Recommendations for Provider *                       | Notes here.... |
            | Recommendations for Behavioral Health Care Manager * | Notes here.... |
            | Additional Areas for Review                          | Notes here.... |
    Scenario:verification for data in acknowledge before clicking show message
        Then verify data in acknowledge before clicking show message
            | text | I acknowledge that the standard message will be included in the intake/progress reports. |
    Scenario:verification for  linked text
        Then verify linked text in checkbox field
            | text | Show message |
    Scenario:click on  linked text
        Then click on linked text
            | text | Show message |
    Scenario:verification for data inside the container
        Then verify the data inside the container
            | data | I have not personally examined the patient. The above treatment considerations and recommendations are based on consultation with the patient's care team including review of the information available and in the medical record as reported/documented. In my consultation and prior to creating the recommendations, I reviewed this case in-depth, which included these records and any needed discussion with the Intake Care Manager, and all relevant clinical information such as the patient’s substance and alcohol use, risk assessment, current and prior medications, allergies, medical history, family history, preferences, and all other completed assessments/documents available. This information is detailed in the Care Manager Summary portion of this report. All recommendations should be implemented with consideration of the patient's relevant prior history and current clinical status. Emergency services including but not limited to going to an emergency department or calling 911 if ever needed should be reviewed with the patient.\n\nThank you again for allowing us to work with you in the care of your patient. Please feel free to contact me, the Care team, or your Provider Relations Coordinator directly with any questions related to the care of your patient. |
    Scenario:click on consult type
        Then select consult type
            | type | Follow Up |
    # Then refresh the browser
    Scenario:verification for data in acknowledge
        Then verify data in acknowledge before clicking show message
            | text | I acknowledge that the standard message will be included in the intake/progress reports. |
    Scenario:verification for linked text
        Then verify linked text in checkbox field
            | text | Hide message |

    Scenario:click linked text
        Then click on linked text
            | text | Hide message |
        Then click on linked text
            | text | Show message |

    Scenario:verification for data inside the container
        Then verify the data inside the container
            | data | I have not personally examined the patient. The above treatment considerations and recommendations are based on consultation with the patient's care team including review of the information available and in the medical record as reported/documented. In my consultation, I reviewed these records and discussed in-depth with the Behavioral Health Care Manager the patient’s substance and alcohol use, risk assessment, any current and prior medications, allergies, medical history, family history, preferences, and all other completed assessments/documents available prior to creating the recommendations. This information is detailed in the Intake Report. All recommendations should be implemented with consideration of the patient's relevant prior history and current clinical status. Emergency services including but not limited to going to an emergency department or calling 911 if ever needed should be reviewed with the patient.\n\nThank you again for allowing us to work with you in the care of your patient. Please feel free to contact me, the Care team, or your Provider Relations Coordinator directly with any questions related to the care of your patient. |