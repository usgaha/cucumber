@careteam
Feature:Creating a care team
    @CreateCareTeam1
    Scenario: Creating a Care Team
        # Then click on View all
        Then click on tab
            | Tab | Care Team |
        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role         | MemberName      | Primary | fromDate    | toDate |
            | Case Manager | MMR CaseManager | Yes     | currentdate |        |
        Then Verify Data in Care Team Page
            | ROLE         | MEMBER_NAME     | PRIMARY |
            | Case Manager | MMR CaseManager | Yes     |
    # Then Close Toaster
    @createcareteam2
    Scenario: Creating a Care Team
        Then click on View all
        Then click on tab
            | Tab | Care Team |
        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role                   | MemberName     | Primary | fromDate    | toDate |
            | Psychiatric Consultant | MMR Consultant | No      | currentdate |        |
        Then Verify Data in Care Team Page
            | ROLE                   | MEMBER_NAME    | PRIMARY |
            | Psychiatric Consultant | MMR Consultant | No      |
    @CreateCareTeam3
    Scenario: Creating a Care Team
        Then click on View all
        Then click on tab
            | Tab | Care Team |
        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role                   | MemberName     | Primary | fromDate    | toDate |
            | Engagement Coordinator | MMR Engagement | No      | currentdate |        |
        Then Verify Data in Care Team Page
            | ROLE                   | MEMBER_NAME    | PRIMARY |
            | Engagement Coordinator | MMR Engagement | No      |
    @CreateCareTeam4
    Scenario: Creating a Care Team
        Then click on View all
        Then click on tab
            | Tab | Care Team |
        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role | MemberName | Primary | fromDate    | toDate |
            | Peer | New Peer   | No      | currentdate |        |
        Then Verify Data in Care Team Page
            | ROLE | MEMBER_NAME | PRIMARY |
            | Peer | New Peer    | No      |
    @CreateCareTeam5
    Scenario: Creating a Care Team
        Then click on View all
        Then click on tab
            | Tab | Care Team |
        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role      | MemberName    | Primary | fromDate    | toDate |
            | Therapist | MMR Therapist | No      | currentdate |        |
        Then Verify Data in Care Team Page
            | ROLE      | MEMBER_NAME   | PRIMARY |
            | Therapist | MMR Therapist | No      |
    @CreateCareTeam6
    Scenario: Creating a Care Team
        Then click on View all
        Then click on tab
            | Tab | Care Team |
        Then click on Add Care Team
        Then Enter Data in Care Team Page
            | Role  | MemberName | Primary | fromDate    | toDate |
            | Nurse | MMR Nurse  | No      | currentdate |        |
        Then Verify Data in Care Team Page
            | ROLE  | MEMBER_NAME | PRIMARY |
            | Nurse | MMR Nurse   | No      |