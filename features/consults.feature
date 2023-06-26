@consults
Feature:Complete Consults verification
    @verificationOfEmptyConsultsPage
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
            | name    | REG (He/Him, 65) CCMR                |
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
    # Scenario:verification for button is clickable or not
    #     Then verify button is clickable or not
    #         | button_text | Publish |
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
    Scenario: url change
        Then change url of program cheetsheat
        Then Click on Change Status
        Then Click on Status Container
            | STATUS_NAME | Active |
        Then enter data in update status pop up
            | START_DATE     |                                           |
            | REASON         |                                           |
            | WORKFLOW_STATE |                                           |
            | NOTES          | notes for status change pending to active |
    Scenario:click on save
        Then Click On Save on Update Status Pop Up
    @creatingConsult
    Scenario: Creating a Consult
        Then click on View all
        Then click on tab
            | Tab | Consults |
        Then Click on Add Consult
        Then select consult source_type
            | type | Intake |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code   | source_type | diagnosis_type |
            | F12.11 | Referred    | Primary        |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | Z38.5 | Referred    | Other          |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | Q43.9 | Suggested   | Primary        |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | L01.1 | Claims      | Primary        |
        Then click on Add Diagnosis in Conults page

        Then Enter Data in Diagnosis Page
            | Code   | source_type | diagnosis_type |
            | G04.00 | Suggested   | Primary        |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | F60.0 | Suggested   | Primary        |

        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | M3                                 |
            | NOTES      | Thanks for adding measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page

            | ASSESSMENT | HRSNS (Short)                           |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | MDQ                                     |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | MADRS                                   |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | CCP Intake                              |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | IVRP Intake                             |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | PHQ9                                    |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | PCL5                                    |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | AUDIT-10                                |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | DAST-10                                 |
            | NOTES      | Thanks for adding Test measurement plan |

        Then Enter data in consults textbox
            | Brief Clinical Summary | Member Brief Clinical Summary |

        Then Enter data in consults textbox
            | Clinical Impression | Member Clinical Impression |
        Then Enter data in consults textbox
            | Recommendations for Provider | Member Recommendations for Provider |
        Then Enter data in consults textbox
            | Recommendations for Behavioral Health Care Manager | Member Recommendations for Behavioral Health Case Manager |
        Then Enter data in consults textbox
            | Additional Areas for Review | Member Additional Areas for Review |

        Then Select acknowledge
    Scenario: Submit Consults
        Then take action for the consult
            | Button_to_click |
            | Publish         |
    Scenario:verify
        Then verify data in Consults Page
            | CONSULT_TYPE   | Intake                                                                                  |
            | DATE_CREATED   | CURRENT_DATE                                                                            |
            | CONSULT_STATUS | Complete                                                                                |
            | MPLAN_NAME1    | M3                                                                                      |
            | MPLAN_DESC1    | Patient-rated checklist that screens for depression, anxiety, PTSD and bipolar disorder |
            | MPLAN_NAME2    | HRSNS (Short)                                                                           |
            | MPLAN_DESC2    | HRSNS Without supplemental questions                                                    |
            | MPLAN_NAME3    | MDQ                                                                                     |
            | MPLAN_DESC3    | Mood Disorder Questionnaire                                                             |
            | MPLAN_NAME4    | MADRS                                                                                   |
            | MPLAN_DESC4    | Montgomery-Asberg Depression Scale                                                      |
            # | MPLAN_NAME5    | CCP Intake (V3)                                                                         |
            # | MPLAN_DESC5    | Intake assessment                                                                       |
            | MPLAN_NAME6    | IVRP Intake                                                                             |
            | MPLAN_DESC6    | Intake assessment                                                                       |
            | MPLAN_NAME7    | PHQ9                                                                                    |
            | MPLAN_DESC7    | Quick Depression Assessment                                                             |
            | MPLAN_NAME8    | PCL5                                                                                    |
            | MPLAN_DESC8    | Measure to assess the presence and severity of PTSD symptoms                            |
            | MPLAN_NAME9    | AUDIT-10                                                                                |
            | MPLAN_DESC9    | The Alcohol Use Disorders Identification Test                                           |
            | MPLAN_NAME10   | DAST-10                                                                                 |
            | MPLAN_DESC10   | DRUG USE QUESTIONNAIRE                                                                  |
    # | CONSULT_NOTES  | NO                                                                                      |


    Scenario: verify notes data in Consults Page
        Then verify notes data in Consults Page
            | Brief Clinical Summary                             | Member Brief Clinical Summary                             |
            | Clinical Impression                                | Member Clinical Impression                                |
            | Recommendations for Provider                       | Member Recommendations for Provider                       |
            | Recommendations for Behavioral Health Care Manager | Member Recommendations for Behavioral Health Case Manager |
            | Additional Areas for Review                        | Member Additional Areas for Review                        |

    Scenario: verify Diagnosis Data1
        Then verify Diagnosis Data
            | DIAGNOSIS        | Cannabis abuse, in remission                                                                                      |
            | DIAGNOSIS_TYPE   | Cannabis abuse, in remission\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | F12.11                                                                                                            |
            | DIAGNOSIS_CODE   | F12.11\nAppox. HCC Weight: NA                                                                                     |
            | DIAGNOSIS_STATUS | Referred                                                                                                          |


    Scenario: verify Diagnosis Data2
        Then verify Diagnosis Data
            | DIAGNOSIS        | Twin liveborn infant, unspecified as to place of birth                                                                                      |
            | DIAGNOSIS_TYPE   | Twin liveborn infant, unspecified as to place of birth\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | Z38.5                                                                                                                                       |
            | DIAGNOSIS_CODE   | Z38.5\nAppox. HCC Weight: NA                                                                                                                |
            | DIAGNOSIS_STATUS | Referred                                                                                                                                    |

    Scenario: verify Diagnosis Data3
        Then verify Diagnosis Data
            | DIAGNOSIS        | Congenital malformation of intestine, unspecified                                                                                      |
            | DIAGNOSIS_TYPE   | Congenital malformation of intestine, unspecified\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | Q43.9                                                                                                                                  |
            | DIAGNOSIS_CODE   | Q43.9\nAppox. HCC Weight: NA                                                                                                           |
            | DIAGNOSIS_STATUS | Suggested                                                                                                                              |

    Scenario: verify Diagnosis Data4
        Then verify Diagnosis Data
            | DIAGNOSIS        | Impetiginization of other dermatoses                                                                                      |
            | DIAGNOSIS_TYPE   | Impetiginization of other dermatoses\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | L01.1                                                                                                                     |
            | DIAGNOSIS_CODE   | L01.1\nAppox. HCC Weight: NA                                                                                              |
            | DIAGNOSIS_STATUS | Claims                                                                                                                    |

    Scenario: verify Diagnosis Data5
        Then verify Diagnosis Data
            | DIAGNOSIS        | Acute disseminated encephalitis and encephalomyelitis, unspecified                                                                                      |
            | DIAGNOSIS_TYPE   | Acute disseminated encephalitis and encephalomyelitis, unspecified\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | G04.00                                                                                                                                                  |
            | DIAGNOSIS_CODE   | G04.00\nAppox. HCC Weight: NA                                                                                                                           |
            | DIAGNOSIS_STATUS | Suggested                                                                                                                                               |

    Scenario: verify Diagnosis Data6
        Then verify Diagnosis Data
            | DIAGNOSIS        | Paranoid personality disorder   |
            | DIAGNOSIS_TYPE   | Paranoid personality disorder   |
            | DIAGNOSIS_CD     | F60.0                           |
            | DIAGNOSIS_CODE   | F60.0\nAppox. HCC Weight: 0.353 |
            | DIAGNOSIS_STATUS | Suggested                       |
    Scenario: verify a Consult
        Then click on View all
        Then click on tab
            | Tab | Consults |
    Scenario:verify consult in list page
        Then verify consults column headings
            | Item1 | Type          |
            | Item2 | Created       |
            | Item3 | Submitted     |
            | Item4 | Care Extender |
            | Item5 | Status        |
    Scenario:verify consult list page data
        Then verify consults list page data
            | Item1     | Intake      |
            | Item5     | Completed   |
            | Item4     | Rama Palepu |
            | created   | Currentdate |
            | submitted | Currentdate |
    Scenario:verify icons
        Then user mouse howers on consult list tab
            | Type | Intake |
        Then user verifies icons
            | detail-circle | Yes |
            | edit-circle   | Yes |
            | delete-circle | Yes |
    Scenario:draft consult
        Then user mouse howers on consult list tab
            | Type | Draft |
        Then click on Edit icon
            | icon | Draft |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code   | source_type | diagnosis_type |
            | F12.11 | Referred    | Primary        |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | Z38.5 | Referred    | Other          |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | Q43.9 | Suggested   | Primary        |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | L01.1 | Claims      | Primary        |
        Then click on Add Diagnosis in Conults page

        Then Enter Data in Diagnosis Page
            | Code   | source_type | diagnosis_type |
            | G04.00 | Suggested   | Primary        |
        Then click on Add Diagnosis in Conults page
        Then Enter Data in Diagnosis Page
            | Code  | source_type | diagnosis_type |
            | F60.0 | Suggested   | Primary        |

        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | M3                                 |
            | NOTES      | Thanks for adding measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page

            | ASSESSMENT | HRSNS (Short)                           |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | MDQ                                     |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | MADRS                                   |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | CCP Intake                              |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | IVRP Intake                             |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | PHQ9                                    |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | PCL5                                    |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | AUDIT-10                                |
            | NOTES      | Thanks for adding Test measurement plan |
        Then click on Add Measurement Plan
        Then Enter data in Measurement Plan page
            | ASSESSMENT | DAST-10                                 |
            | NOTES      | Thanks for adding Test measurement plan |

        Then Enter data in consults textbox
            | Brief Clinical Summary | Member Brief Clinical Summary |

        Then Enter data in consults textbox
            | Clinical Impression | Member Clinical Impression |
        Then Enter data in consults textbox
            | Recommendations for Provider | Member Recommendations for Provider |
        Then Enter data in consults textbox
            | Recommendations for Behavioral Health Care Manager | Member Recommendations for Behavioral Health Case Manager |
        Then Enter data in consults textbox
            | Additional Areas for Review | Member Additional Areas for Review |

        Then Select acknowledge


    Scenario: Submit Consults

        Then take action for the consult
            | Button_to_click |
            | Publish         |
    Scenario:verify
        Then verify data in Consults Page
            | CONSULT_TYPE   | Follow Up                                                                               |
            | DATE_CREATED   | CURRENT_DATE                                                                            |
            | CONSULT_STATUS | Complete                                                                                |
            | MPLAN_NAME1    | M3                                                                                      |
            | MPLAN_DESC1    | Patient-rated checklist that screens for depression, anxiety, PTSD and bipolar disorder |
            | MPLAN_NAME2    | HRSNS (Short)                                                                           |
            | MPLAN_DESC2    | HRSNS Without supplemental questions                                                    |
            | MPLAN_NAME3    | MDQ                                                                                     |
            | MPLAN_DESC3    | Mood Disorder Questionnaire                                                             |
            | MPLAN_NAME4    | MADRS                                                                                   |
            | MPLAN_DESC4    | Montgomery-Asberg Depression Scale                                                      |
            # | MPLAN_NAME5    | CCP Intake (V3)                                                                         |
            # | MPLAN_DESC5    | Intake assessment                                                                       |
            | MPLAN_NAME6    | IVRP Intake                                                                             |
            | MPLAN_DESC6    | Intake assessment                                                                       |
            | MPLAN_NAME7    | PHQ9                                                                                    |
            | MPLAN_DESC7    | Quick Depression Assessment                                                             |
            | MPLAN_NAME8    | PCL5                                                                                    |
            | MPLAN_DESC8    | Measure to assess the presence and severity of PTSD symptoms                            |
            | MPLAN_NAME9    | AUDIT-10                                                                                |
            | MPLAN_DESC9    | The Alcohol Use Disorders Identification Test                                           |
            | MPLAN_NAME10   | DAST-10                                                                                 |
            | MPLAN_DESC10   | DRUG USE QUESTIONNAIRE                                                                  |
    # | CONSULT_NOTES  | NO                                                                                      |


    Scenario: verify notes data in Consults Page
        Then verify notes data in Consults Page
            | Brief Clinical Summary                             | Member Brief Clinical Summary                             |
            | Clinical Impression                                | Member Clinical Impression                                |
            | Recommendations for Provider                       | Member Recommendations for Provider                       |
            | Recommendations for Behavioral Health Care Manager | Member Recommendations for Behavioral Health Case Manager |
            | Additional Areas for Review                        | Member Additional Areas for Review                        |

    Scenario: verify Diagnosis Data1
        Then verify Diagnosis Data
            | DIAGNOSIS        | Cannabis abuse, in remission                                                                                      |
            | DIAGNOSIS_TYPE   | Cannabis abuse, in remission\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | F12.11                                                                                                            |
            | DIAGNOSIS_CODE   | F12.11\nAppox. HCC Weight: NA                                                                                     |
            | DIAGNOSIS_STATUS | Referred                                                                                                          |


    Scenario: verify Diagnosis Data2
        Then verify Diagnosis Data
            | DIAGNOSIS        | Twin liveborn infant, unspecified as to place of birth                                                                                      |
            | DIAGNOSIS_TYPE   | Twin liveborn infant, unspecified as to place of birth\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | Z38.5                                                                                                                                       |
            | DIAGNOSIS_CODE   | Z38.5\nAppox. HCC Weight: NA                                                                                                                |
            | DIAGNOSIS_STATUS | Referred                                                                                                                                    |

    Scenario: verify Diagnosis Data3
        Then verify Diagnosis Data
            | DIAGNOSIS        | Congenital malformation of intestine, unspecified                                                                                      |
            | DIAGNOSIS_TYPE   | Congenital malformation of intestine, unspecified\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | Q43.9                                                                                                                                  |
            | DIAGNOSIS_CODE   | Q43.9\nAppox. HCC Weight: NA                                                                                                           |
            | DIAGNOSIS_STATUS | Suggested                                                                                                                              |

    Scenario: verify Diagnosis Data4
        Then verify Diagnosis Data
            | DIAGNOSIS        | Impetiginization of other dermatoses                                                                                      |
            | DIAGNOSIS_TYPE   | Impetiginization of other dermatoses\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | L01.1                                                                                                                     |
            | DIAGNOSIS_CODE   | L01.1\nAppox. HCC Weight: NA                                                                                              |
            | DIAGNOSIS_STATUS | Claims                                                                                                                    |

    Scenario: verify Diagnosis Data5
        Then verify Diagnosis Data
            | DIAGNOSIS        | Acute disseminated encephalitis and encephalomyelitis, unspecified                                                                                      |
            | DIAGNOSIS_TYPE   | Acute disseminated encephalitis and encephalomyelitis, unspecified\nThis dx does not have an associated HCC weight, please consider a more specific Dx. |
            | DIAGNOSIS_CD     | G04.00                                                                                                                                                  |
            | DIAGNOSIS_CODE   | G04.00\nAppox. HCC Weight: NA                                                                                                                           |
            | DIAGNOSIS_STATUS | Suggested                                                                                                                                               |

    Scenario: verify Diagnosis Data6
        Then verify Diagnosis Data
            | DIAGNOSIS        | Paranoid personality disorder   |
            | DIAGNOSIS_TYPE   | Paranoid personality disorder   |
            | DIAGNOSIS_CD     | F60.0                           |
            | DIAGNOSIS_CODE   | F60.0\nAppox. HCC Weight: 0.353 |
            | DIAGNOSIS_STATUS | Suggested                       |
    Scenario: verify a Consult
        Then click on View all
        Then click on tab
            | Tab | Consults |
    Scenario:verify consult in list page
        Then verify consults column headings
            | Item1 | Type          |
            | Item2 | Created       |
            | Item3 | Submitted     |
            | Item4 | Care Extender |
            | Item5 | Status        |
    Scenario:verify consult list page data
        Then verify consults list page data
            | Item1     | Intake      |
            | Item5     | Completed   |
            | Item4     | Rama Palepu |
            | created   | Currentdate |
            | submitted | Currentdate |
    Scenario:verify icons
        Then user mouse howers on consult list tab
            | Type | Follow Up |
        Then user verifies icons
            | detail-circle | Yes |
            | edit-circle   | Yes |
            | delete-circle | Yes |

