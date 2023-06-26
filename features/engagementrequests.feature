@VerifyEngagementRequests_V2
Feature: Verify Engagement Requests v2



    @C8711
    Scenario: LogoutAndLoginTotheCase
        Then Login to the MMR
            | EMAIL    | casemanager@mind.com |
            | PASSWORD | Test@123             |
    # 	# Then Labs Enable
    # 	# 	|UITHEME_BUTTON_STATUS|ON|

    @C8711
    Scenario: verify Engagement Request icon from mmr page header
        Then Verify Engagment request icon Exists
            | ICON        | Engagement Requests |
            | ICON_EXISTS | YES                 |
    @C8711
    Scenario: verify count displayed on engagement request icon
        Then Engagement Request Count Before
        Then verify count displayed on engagement request icon
            | COMPARISION_TYPE | >= |
            | COUNT            | 0  |
    @C8711
    Scenario: verify text when mouse hover on engagement request icon
        Then verify text when mouse hover on engagement request icon
            | TEXT | Engagement Requests |


    @C8711
    Scenario: Create Member
        Then user clicks on Members
        Then click on Add Member
        Then Enter data in Add Member Page with all details
            | fname | mname | lname   | email                        | TYPE   | BELONG_TO | mobile     | dob        | Housing_status                              | Religious_Affiliation | gender | marital_status | address                               | home_phone | office_phone | pname | GENDER_IDENTITY | PRONOUN | SEXUAL_ORIENTATION | MARITAL_STATUS | PRIMARY_LANGUAGE | TIME_ZONE                  | ETHNICITY           | RACE  | LEAD_TYPE     | LEAD_SOURCE | Read | Write | Speak | Note                          |
            | CCMR  | AUTO  | MEMBER1 | MMRAUTO.MEMBER1@mindoula.com | Mobile | Member    | 2125618000 | 01/31/1958 | Living with parents/caregiver/family member | None                  | Male   | Single         | 11529 170th St Jamaica NY, 11434, USA | 2125618001 | 2125618002   | REG   | Male            | He/Him  | Asexual            | Annulled       | Arabic           | Pacific Time (US & Canada) | Declined to Specify | Asian | Cold Referral | Email       | Yes  | Yes   | Yes   | has curly hair and is tanned. |

    @AddProgram
    @C8711
    Scenario: Add a New Program
        # Then Click on Add Program in Member's ID Bar
        # Then Navigate to Provider Look Up
        # Then Enter data in Add Program Provider Look Up Page
        #     | PARENT_PROGRAM | program                                        | practice | identified_on | provider | EMR_ID  | status  | verbal_date | written_date | written_document       | roi_date | roi_document           | medicaid | insurance_note          | readmission_date | readmission_discharge_date | admission_reason | hospital             | alt_identifier          | admission_valid | Member Type |
        #     | Other          | MindoulaCare - Amerihealth Caritas (LA) - FFS | Test     | currentdate-3 | Rahul    | A534534 | Pending | 06162019    | 06172019     | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019         | 06202019                   | Psychiatric      | Bon Secours Hospital | text for alt identifier | Yes             |             |
        Then click on Quick Add
        Then select tab in list
            | section | Program |
        Then Navigate to Program Look Up
        Then Enter data in Add Program page
            | PARENT_PROGRAM | program                                        | practice | identified_on | provider | EMR_ID  | status  | verbal_date | written_date | written_document       | roi_date | roi_document           | medicaid | insurance_note          | readmission_date | readmission_discharge_date | admission_reason | hospital             | alt_identifier          | admission_valid | Member Type |
            | Other          | MindoulaCare - Amerihealth Caritas (LA) - FFS | Test     | currentdate-3 | Rahul    | A534534 | Pending | 06162019    | 06172019     | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019         | 06202019                   | Psychiatric      | Bon Secours Hospital | text for alt identifier | Yes             |             |

    @CreateCareTeam
    @C8711
    Scenario: Creating a Care Team
        Then click on View all
        Then click on tab
            | Tab | Care Team |
        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role         | MemberName      | Primary | fromDate    | toDate |
            | Case Manager | MMR CaseManager | Yes     | currentdate |        |
    @CreateCareTeam
    @C8711
    Scenario: Creating a Care Team

        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role                   | MemberName     | Primary | fromDate    | toDate |
            | Engagement Coordinator | New Engagement | No      | currentdate |        |

    @CreateCareTeam
    @C8711
    Scenario: Creating a Care Team

        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role  | MemberName | Primary | fromDate    | toDate |
            | Nurse | MMR Nurse  | No      | currentdate |        |

    @CreateCareTeam
    @C8711
    Scenario: Creating a Care Team

        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role | MemberName | Primary | fromDate    | toDate |
            | Peer | New Peer   | No      | currentdate |        |

    @CreateCareTeam
    @C8711
    Scenario: Creating a Care Team

        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role      | MemberName    | Primary | fromDate    | toDate |
            | Therapist | MMR Therapist | No      | currentdate |        |



    @C8711
    Scenario: Update Member Status
        # Then click on Members Tab
        #     | TabName |
        #     | Program |
        Then change url of program cheetsheat
        Then Click on Change Status
        Then Click on Status Container
            | STATUS_NAME | Active |
        Then enter data in update status pop up
            | START_DATE     |                                           |
            | REASON         |                                           |
            | WORKFLOW_STATE |                                           |
            | NOTES          | notes for status change pending to active |

    @C8711
    Scenario: Save member email
        Then save member details
            | INPUT | MEMBER1 |
    # Then Refresh the browser

    @LogoutCaseManager
    @C8711
    Scenario: LogoutCaseManager
        Then Logout from Website
    @C8711
    Scenario: Navigate to member portal
        Then Navigate to member portal

    # #######################   member login with mobile number without consent details  #####################################


    @C8711
    Scenario: member login with mobile number
        Then Enter the mobile number
        Then Click on continue button
        Then Enter Member data
            | FIRST_NAME | CCMR       |
            | LAST_NAME  | MEMB1      |
            | DOB        | 01/31/1958 |
            | ZIP_CODE   | 11434      |
        Then Click on continue button
        Then Click on I consent in confirm consent
        Then Enter the Access Code
            | ACCESS_CODE | 123456 |
        Then Click on continue button
        Then Click on setup on 2 step verification
        Then Enter the pincode
            | PIN_CODE | 123456 |
        Then Click on continue button
        Then Enter the pincode
            | PIN_CODE | 123456 |
        Then Click on continue button
        Then Enter the email address in confirm email
        Then Click on continue button

    @C8711
    Scenario: Verify Left Navigation Items With Member
        Then Verify items exists in Member left Navigation
            | ITEM1 | Dashboard   |
            | ITEM2 | Assessments |
            | ITEM3 | Resources   |




    Scenario: Creating PHQ9 Assessment

        Then user clicks on left nav item in Member Platform
            | name        |
            | Assessments |
        Then Enter Data in Search field
            | ASSESSMENT | PHQ9 |

        Then Move Cursor on Assessment start
            | ASSESSMENT | PHQ9 |
        Then click on Start Assessment
            | Name |
            | PHQ9 |
        Then Enter Data in PHQ9 Assessment
            | Feeling down, depressed, or hopeless                                                               | Nearly every day    |
            | Little interest or pleasure in doing things?                                                       | Nearly every day    |
            | Trouble falling or staying asleep, or sleeping too much                                            | Nearly every day    |
            | Feeling tired or having little energy                                                              | Nearly every day    |
            | Poor appetite or overeating                                                                        | Nearly every day    |
            | Feeling bad about yourself or that you are a failure                                               | Nearly every day    |
            | Trouble concentrating on things, such as reading the newspaper                                     | Nearly every day    |
            | Moving or speaking so slowly that other people could have noticed                                  | Nearly every day    |
            | Thoughts that you would be better off dead                                                         | Nearly every day    |
            | If you checked off any problems, how difficult have these problems made it for you to do your work | Extremely difficult |
        Then take action on assessment
            | Button_to_click |
            | Submit          |
    Scenario: Verify Self Harm Pop Up opens
        Then Verify Self Harm Pop Up opens
            | DIALOG_OPENS | YES |
        Then Close Self Harm Pop Up
    Scenario: Verify PHQ9 Responses
        Then Verify PHQ9 Responses
            | TITLE           | Quick Depression Assessment            |
            | RISK            | Depression symptom severity is Severe. |
            | TOTAL_SCORE     | 27                                     |
            | TOTAL_DESC      | Severe                                 |
            | SELF_HARM_ALERT | EXIST                                  |
            | FOLLOW_UP_TASKS |                                        |


    Scenario: LogoutFromMemberPortal
        Then Logout from Website
    Scenario: Navigate to mMR portal
        Given Navigate to mMR portal
        Then Login to the MMR
            | EMAIL    | casemanager@mind.com |
            | PASSWORD | Test@123             |

    Scenario: verify Engagement Request icon from mmr page header
        Then Verify Engagment request icon Exists
            | ICON        | Engagement Requests |
            | ICON_EXISTS | YES                 |

    Scenario: verify and Compare the Eng Request Counts
        Then Engagement Request Count After
        Then Compare the Eng Request Count
            | COMPARISION_TYPE | > |



    Scenario: Verify Engagement Request exists in List view
        Then Click on Engagement Requests Icon on the Casemanager Home Page
        Then Select Engagement Requests view
            | VIEW | Detail View |
        Then Select Engagement Requests view
            | VIEW | Detail View |

        Then Verify Engagement Request exists
            | TIME          |                                                |
            | MEMBER        | MMR MEMB1                                      |
            | PROGRAM       | MindoulaCare - Amerihealth Caritas (LA) - FFS |
            | STATUS1       | Assigned                                       |
            | STATUS2       | Unconfirmed                                    |
            | CARE_EXTENDER | MMR CaseManager                                |
            | LABEL         | Critical                                       |
            | RECORD_EXISTS | YES                                            |
    Scenario: verify member request details will be displayed on right side panel
        Then Click on engagement request
            | MEMBER        | MMR MEMB1                                      |
            | PROGRAM       | MindoulaCare - Amerihealth Caritas (LA) - FFS |
            | STATUS1       | Assigned                                       |
            | STATUS2       | Unconfirmed                                    |
            | CARE_EXTENDER | MMR CaseManager                                |
            | LABEL         | Critical                                       |
    # Then Verify member request details
    # 	|MEMBER			|MMR MEMB1|
    # 	|PROGRAM		| MindoulaCare - Amerihealth Caritas (LA) - FFS|

    # 	|CARE_EXTENDER	|MMR CaseManager|
    # 	|LABEL			|Self-Harm Alert|
    Scenario: verify member request buttons will be displayed on right side panel
        Then Verify member request buttons exists
            | Accept | YES |
            | Reject | YES |
    Scenario: verify member request Icons will be displayed on right side panel
        Then Verify member request Icons exists
            | phone | YES |
            | chat  | YES |
    Scenario: Accept the Self harm alert request
        Then Click on engagement request button
            | BUTTON | Accept |
    # Then Verify Toast message
    # 	|MESSAGE|Engagement request accepted successfully!|

    Scenario: verify member request buttons will be displayed on right side panel
        Then Verify member request buttons exists
            | Mark As Addressed | YES |
    Scenario: verify the Activity log Text displayed on right side panel
        Then verify the Activity log Text
            | TEXT1 | Assigned to MMR CaseManager |
            | TEXT2 | Accepted by MMR CaseManager |

    Scenario: verify the Activity log Time displayed on right side panel
        Then Verify the Activity log Time Exists
            | Assigned to MMR CaseManager | YES |
            | Accepted by MMR CaseManager | YES |

    Scenario: Mark As Addresse the Self harm alert request
        Then Click on engagement request button
            | BUTTON | Mark As Addressed |
        Then Verify Toast message
            | MESSAGE | Engagement request addressed successfully! |

    Scenario: verify member request buttons will be displayed on right side panel
        Then Verify member request buttons exists
            | Add Case Note | YES |
    Scenario: verify the Activity log Text displayed on right side panel
        Then verify the Activity log Text
            | TEXT1 | Addressed by MMR CaseManager |
            | TEXT2 | Assigned to MMR CaseManager  |
            | TEXT3 | Accepted by MMR CaseManager  |

    Scenario: verify the Activity log Time displayed on right side panel
        Then Verify the Activity log Time Exists
            | Addressed by MMR CaseManager | YES |
            | Assigned to MMR CaseManager  | YES |
            | Accepted by MMR CaseManager  | YES |


    @C8711
    Scenario: Close Engagement request without case notes
        Then Select Close Without Case Notes

        Then Verify Toast message
            | MESSAGE | Engagement request closed successfully! |

    Scenario: verify member request buttons will be displayed on right side panel
        Then Verify member request status exists
            | Closed | YES |



    Scenario: LogoutCaseManager
        Then Logout from Website
    Scenario: Navigate to member portal
        Then Navigate to member portal

    #######################   member login with mobile number   #####################################

    Scenario: member login with mobile number
        Then Enter the mobile number
        Then Click on continue button
        Then Enter the Access Code
            | ACCESS_CODE | 123456 |
        Then Click on continue button
        Then Enter the pincode
            | PIN_CODE | 123456 |
        Then Click on continue button


    @VerifyLeftNavigationItemsWithMember
    Scenario: Verify Left Navigation Items With Member
        Then Verify items exists in Member left Navigation
            | ITEM1 | Dashboard   |
            | ITEM2 | Assessments |
            | ITEM3 | Resources   |
    @VerifyItemsExistsWithMemberLogin
    Scenario: Verify Items Exists With Member Login
        Then Verify Items Exists With Member Login
            | ITEM1 | Check In      |
            | ITEM2 | Chat          |
            | ITEM3 | Schedule Call |

    @C8711
    Scenario: Verify AutoReply message in member Home Page
        Then Refresh the browser

        Then Take Action From Member Home Page
            | Button_Container |
            | Chat             |

        Then Click on the Care_Extender_name in the Chat Inbox
            | Care_Extender_Name |
            | MMR CaseManager    |
        Then Enter Message in Chat Text Box
            | MESSAGE                          |
            | Good Morning Mindoula Care Team! |
        Then click on Send Icon in messenger
        Then Verify the text message is sent to the Care_Extender_Name Successfully
            | message                          |
            | Good Morning Mindoula Care Team! |


    # @VerifyAutoReplymessagerecieved
    # @C8711
    # Scenario: Verify the AutoReply message recieved

    #     Then Wait for 2 minutes in chat room for Auto Reply Message
    #     Then Verify the AutoReply message recieved.
    #         | Auto_Reply_message                                                                                                                                                             |
    #         | Your care team is alerted and they will get back to you within 2 hours. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911. |



    # @C8711
    # Scenario: LogoutFromMemberPortal
    #     Then Logout from Website
    # @C8711
    # Scenario: Navigate to mMR portal
    #     Given Navigate to mMR portal
    #     Then Login to the MMR
    #         | EMAIL    | casemanager@mind.com |
    #         | PASSWORD | Test@123             |

    # @C8711
    # Scenario: verify Engagement Request icon from mmr page header
    #     Then Verify Engagment request icon Exists
    #         | ICON        | Engagement Requests |
    #         | ICON_EXISTS | YES                 |

    # @C8711
    # Scenario: verify and Compare the Eng Request Counts
    #     Then Engagement Request Count After
    #     Then Compare the Eng Request Count
    #         | COMPARISION_TYPE | > |




    # @C8711
    # Scenario: Verify Engagement Request exists in List view
    #     Then Click on Engagement Requests Icon on the Casemanager Home Page
    #     Then Select Engagement Requests view
    #         | VIEW | Detail View |
    #     Then Select Engagement Requests view
    #         | VIEW | Detail View |

    # # Then Verify Engagement Request exists for Chat Auto Reply
    # # 	|TIME			||
    # # 	|MEMBER			|MMR MEMB1|
    # # 	|PROGRAM		| MindoulaCare - Amerihealth Caritas (LA) - FFS|
    # # 	|STATUS1		|Assigned|
    # # 	|STATUS2		|Unconfirmed|
    # # 	|CARE_EXTENDER	|MMR CaseManager|
    # # 	|LABEL			||
    # # 	|RECORD_EXISTS	|YES|
    # @C8711
    # Scenario: verify member request details will be displayed on right side panel
    #     Then Click on engagement request for Chat Auto Reply
    #         | MEMBER        | MMR MEMB1                                      |
    #         | PROGRAM       | MindoulaCare - Amerihealth Caritas (LA) - FFS |
    #         | STATUS1       | Assigned                                       |
    #         | STATUS2       | Unconfirmed                                    |
    #         | CARE_EXTENDER | MMR CaseManager                                |
    #         | LABEL         |                                                |
    # # Then Verify member request details
    # # 	|MEMBER			|MMR MEMB1|
    # # 	|PROGRAM		| MindoulaCare - Amerihealth Caritas (LA) - FFS|
    # # 	|CARE_EXTENDER	|MMR CaseManager|
    # # 	|LABEL			|Chat Auto Reply|
    # @C8711
    # Scenario: verify member request buttons will be displayed on right side panel
    #     Then Verify member request buttons exists
    #         | Accept | YES |
    #         | Reject | YES |
    # @C8711
    # Scenario: verify member request Icons will be displayed on right side panel
    #     Then Verify member request Icons exists
    #         | phone | YES |
    #         | chat  | YES |
    # @C8711
    # Scenario: Accept the Chat Auto Reply request
    #     Then Click on engagement request button
    #         | BUTTON | Accept |
    #     Then Verify Toast message
    #         | MESSAGE | Engagement request accepted successfully! |






    # @C8711
    # Scenario: verify member request buttons will be displayed on right side panel
    #     Then Verify member request buttons exists
    #         | Mark As Addressed | YES |
    # @C8711
    # Scenario: verify the Activity log Text displayed on right side panel
    #     Then verify the Activity log Text
    #         | TEXT1 | Assigned to MMR CaseManager |
    #         | TEXT2 | Accepted by MMR CaseManager |

    # @C8711
    # Scenario: verify the Activity log Time displayed on right side panel
    #     Then Verify the Activity log Time Exists
    #         | Assigned to MMR CaseManager | YES |
    #         | Accepted by MMR CaseManager | YES |

    # @C8711
    # Scenario: Mark As Addresse the Self harm alert request
    #     Then Click on engagement request button
    #         | BUTTON | Mark As Addressed |
    #     Then Verify Toast message
    #         | MESSAGE | Engagement request addressed successfully! |

    # @C8711
    # Scenario: verify member request buttons will be displayed on right side panel
    #     Then Verify member request buttons exists
    #         | Add Case Note | YES |
    # @C8711
    # Scenario: verify the Activity log Text displayed on right side panel
    #     Then verify the Activity log Text
    #         | TEXT1 | Addressed by MMR CaseManager |
    #         | TEXT2 | Assigned to MMR CaseManager  |
    #         | TEXT3 | Accepted by MMR CaseManager  |

    # @C8711
    # Scenario: verify the Activity log Time displayed on right side panel
    #     Then Verify the Activity log Time Exists
    #         | Addressed by MMR CaseManager | YES |
    #         | Assigned to MMR CaseManager  | YES |
    #         | Accepted by MMR CaseManager  | YES |

    # @C8711
    # Scenario: Close Engagement request without case notes
    #     Then Select Close Without Case Notes
    #     Then Verify Toast message
    #         | MESSAGE | Engagement request closed successfully! |


    # @C8711
    # Scenario: verify member request buttons will be displayed on right side panel
    #     Then Verify member request status exists
    #         | Closed | YES |


    # @C8711
    # Scenario: LogoutFromMemberPortal
    #     Then Logout from Website
    # @C8711
    # Scenario: Navigate to mMR portal
    #     Given Navigate to mMR portal
    #     Then Login to the MMR
    #         | EMAIL    | casemanager@mind.com |
    #         | PASSWORD | Test@123             |
    # @C8711
    # Scenario: verify Engagement Request icon from mmr page header
    #     Then Verify Engagment request icon Exists
    #         | ICON        | Engagement Requests |
    #         | ICON_EXISTS | YES                 |
    # @C8711
    # Scenario: verify count displayed on engagement request icon
    #     Then Engagement Request Count Before
    #     Then verify count displayed on engagement request icon
    #         | COMPARISION_TYPE | >= |
    #         | COUNT            | 0  |

    # @C8711
    # Scenario: verify text when mouse hover on engagement request icon
    #     Then verify text when mouse hover on engagement request icon
    #         | TEXT | Engagement Requests |


    # @C8711
    # Scenario: Create Member
    #     Then user clicks on Members
    #     Then click on Add Member
    #     Then Enter data in Add Member Page with all details
    #         | fname | mname | lname   | email                        | TYPE   | BELONG_TO | mobile     | dob        | Housing_status                              | Religious_Affiliation | gender | marital_status | address                               | home_phone | office_phone | pname | GENDER_IDENTITY | PRONOUN | SEXUAL_ORIENTATION | MARITAL_STATUS | PRIMARY_LANGUAGE | TIME_ZONE                  | ETHNICITY           | RACE  | LEAD_TYPE     | LEAD_SOURCE | Read | Write | Speak | Note                          |
    #         | CCMR  | AUTO  | MEMBER1 | MMRAUTO.MEMBER1@mindoula.com | Mobile | Member    | 2125618000 | 01/31/1958 | Living with parents/caregiver/family member | None                  | Male   | Single         | 11529 170th St Jamaica NY, 11434, USA | 2125618001 | 2125618002   | REG   | Male            | He/Him  | Asexual            | Annulled       | Arabic           | Pacific Time (US & Canada) | Declined to Specify | Asian | Cold Referral | Email       | Yes  | Yes   | Yes   | has curly hair and is tanned. |
    # @AddProgram
    # @C8711
    # Scenario: Add a New Program
    #     # Then Click on Add Program in Member's ID Bar
    #     # Then Navigate to Provider Look Up
    #     # Then Enter data in Add Program Provider Look Up Page
    #     #     | PARENT_PROGRAM | program                                        | practice | identified_on | provider | EMR_ID  | status  | verbal_date | written_date | written_document       | roi_date | roi_document           | medicaid | insurance_note          | readmission_date | readmission_discharge_date | admission_reason | hospital             | alt_identifier          | admission_valid | Member Type |
    #     #     | Other          | MindoulaCare - Amerihealth Caritas (LA) - FFS | Test     | currentdate-3 | Rahul    | A534534 | Pending | 06162019    | 06172019     | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019         | 06202019                   | Psychiatric      | Bon Secours Hospital | text for alt identifier | Yes             |             |

    #     Then click on Quick Add
    #     Then select tab in list
    #         | section | Program |
    #     Then Navigate to Program Look Up
    #     Then Enter data in Add Program page
    #         | PARENT_PROGRAM | program                                        | practice | identified_on | provider | EMR_ID  | status  | verbal_date | written_date | written_document       | roi_date | roi_document           | medicaid | insurance_note          | readmission_date | readmission_discharge_date | admission_reason | hospital             | alt_identifier          | admission_valid | Member Type |
    #         | Other          | MindoulaCare - Amerihealth Caritas (LA) - FFS | Test     | currentdate-3 | Rahul    | A534534 | Pending | 06162019    | 06172019     | C:\\Selenium\\pmay.pdf | 06182019 | C:\\Selenium\\pmay.pdf | M3436777 | This is insurance notes | 06192019         | 06202019                   | Psychiatric      | Bon Secours Hospital | text for alt identifier | Yes             |             |

    # @CreateCareTeam
    # @C8711
    # Scenario: Creating a Care Team
    #     Then click on View all
    #     Then click on tab
    #         | Tab | Care Team |
    #     Then click on Add Care Team
    #     Then Enter Data in Care Team Page
    #         | Role         | MemberName      | Primary | fromDate    | toDate |
    #         | Case Manager | MMR CaseManager | Yes     | currentdate |        |

    # @CreateCareTeam
    # @C8711
    # Scenario: Creating a Care Team

    #     Then click on Add Care Team
    #     Then Enter Data in Care Team Page
    #         | Role                   | MemberName     | Primary | fromDate    | toDate |
    #         | Engagement Coordinator | New Engagement | No      | currentdate |        |

    # @CreateCareTeam
    # @C8711
    # Scenario: Creating a Care Team

    #     Then click on Add Care Team
    #     Then Enter Data in Care Team Page
    #         | Role  | MemberName | Primary | fromDate    | toDate |
    #         | Nurse | MMR Nurse  | No      | currentdate |        |

    # @CreateCareTeam
    # @C8711
    # Scenario: Creating a Care Team

    #     Then click on Add Care Team
    #     Then Enter Data in Care Team Page
    #         | Role | MemberName | Primary | fromDate    | toDate |
    #         | Peer | New Peer   | No      | currentdate |        |

    # @CreateCareTeam
    # @C8711
    # Scenario: Creating a Care Team

    #     Then click on Add Care Team
    #     Then Enter Data in Care Team Page
    #         | Role      | MemberName    | Primary | fromDate    | toDate |
    #         | Therapist | MMR Therapist | No      | currentdate |        |


    # @C8711
    # Scenario: Update Member Status
    #     # Then click on Members Tab
    #     #     | TabName |
    #     #     | Program |
    #     Then change url of program cheetsheat
    #     Then Click on Change Status
    #     Then Click on Status Container
    #         | STATUS_NAME | Active |
    #     Then enter data in update status pop up
    #         | START_DATE     |                                           |
    #         | REASON         |                                           |
    #         | WORKFLOW_STATE |                                           |
    #         | NOTES          | notes for status change pending to active |

    # @C8711
    # Scenario: Save member email
    #     Then save member details
    #         | INPUT | MEMBER1 |
    # # Then Refresh the browser

    # @LogoutCaseManager
    # Scenario: LogoutCaseManager
    #     Then Logout from Website
    # Scenario: Navigate to member portal
    #     Then Navigate to member portal

    # # #######################   member login with mobile number without consent details  #####################################


    # @C8711
    # Scenario: member login with mobile number
    #     Then Enter the mobile number
    #     Then Click on continue button
    #     Then Enter Member data
    #         | FIRST_NAME | MMR        |
    #         | LAST_NAME  | MEMB1      |
    #         | DOB        | 01/31/1958 |
    #         | ZIP_CODE   | 11434      |
    #     Then Click on continue button
    #     Then Click on I consent in confirm consent
    #     Then Enter the Access Code
    #         | ACCESS_CODE | 123456 |
    #     Then Click on continue button
    #     Then Click on setup on 2 step verification
    #     Then Enter the pincode
    #         | PIN_CODE | 123456 |
    #     Then Click on continue button
    #     Then Enter the pincode
    #         | PIN_CODE | 123456 |
    #     Then Click on continue button
    #     Then Enter the email address in confirm email
    #     Then Click on continue button

    # @C8711
    # Scenario: Verify Left Navigation Items With Member
    #     Then Verify items exists in Member left Navigation
    #         | ITEM1 | Dashboard   |
    #         | ITEM2 | Assessments |
    #         | ITEM3 | Resources   |


    # @C8711
    # Scenario: Verify AutoReply message in member Home Page
    #     Then Refresh the browser
    #     Then Take Action From Member Home Page
    #         | Button_Container |
    #         | Check In         |

    #     Then Click on the Care_Extender_name in the Chat Inbox
    #         | Care_Extender_Name |
    #         | MMR CaseManager    |

    # # Then Verify Checkin is Opened in Primary Case manager Chat window
    # # 	| Primary_Case_Manager |
    # # 	| MMR CaseManager |
    # #   Then Select Checkin window.
    # @C8711
    # Scenario: Select Checkin Options

    #     Then Select Checkin Options by click on it.

    #         | Checkin Option |
    #         | Not Well       |
    #     Then Select Checkin Options by click on it.
    #         | Checkin Option |
    #         | Nothing        |
    #     Then Select Checkin Options by click on it.
    #         | Checkin Option |
    #         | Not at all     |

    #     Then Click on Tell Us More Text Box
    #     Then type into the Text box
    #         | TEXT_MESSAGE                                                                                                                |
    #         | I went to school today and felt very stressed at the amount of work I had to get done. I am still feeling overwelmed by it. |
    #     Then Click on Submit in Tell Us More
    #     Then Store the Time Value for Checkin Message
    #     Then Enter Message in Chat Text Box
    #         | MESSAGE                         |
    #         | Good Morning Primary Care Team! |

    #     Then click on Send Icon in messenger
    #     Then Store the Time Value for text message
    #     Then Verify the Sent text in the chat window
    #         | CheckIn Message1 | I am not well.                                                                                                              |
    #         | CheckIn Message2 | I am getting nothing done.                                                                                                  |
    #         | CheckIn Message3 | I am not sleeping at all.                                                                                                   |
    #         | Bottom_message   | I went to school today and felt very stressed at the amount of work I had to get done. I am still feeling overwelmed by it. |



    # @VerifyAutoReplyMessage
    # @C8711
    # Scenario: Verify Auto Reply message recieved

    #     Then Wait for 2 minutes

    #     Then Verify Auto Reply message recieved
    #         | Auto_Reply_message                                                                                                                                                             |
    #         | Your care team is alerted and they will get back to you within 2 hours. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911. |
    # #  | We will get back to you within 1 hour. If you are in crisis or this is an emergency, please call our crisis team at 888-879-9786 or call 911.|


    # @C8711
    # Scenario: LogoutFromMemberPortal
    #     Then Logout from Website
    # @C8711
    # Scenario: Navigate to mMR portal
    #     Given Navigate to mMR portal
    #     Then Login to the MMR
    #         | EMAIL    | casemanager@mind.com |
    #         | PASSWORD | Test@123             |

