
# Git and Github Workshop: Session 2

## Project Title: Methods Lunch workshop attendees page

**Objective:** By the end of this session, participants will have collaboratively created an interactive web page listing workshop attendees. Each attendee’s profile will include a name, affiliation, email, bio, and a profile image. Participants will learn to manage text-based files (HTML, CSS, and Markdown) and binary files (images) using Git, and experience both the collaborator and forking workflows.

---

## Instructions:

> 🚧 **Before You Begin:** Ensure that Git and Python are installed on your device, you have a GitHub account, and you are familiar with basic Git commands. If not, please install and configure Git and Python, create a GitHub account, and log in before proceeding.

### Step 1: Fork the `methods_lunch_git_intermediate` repository to your account
1. Visit the GitHub page for the [methods_lunch_git_intermediate](https://github.com/AliTafakkor/methods_lunch_git_intermediate) repository.
2. Click the **Fork** button in the upper right corner to create a copy of the repository in your GitHub account.
    ![alt text](<instruction_images/Screenshot 2024-11-17 at 6.52.18 PM.png>)

    > make sure to check *Copy the main branch only*.
3. Clone your forked repository to your local machine:
    ```bash
    git clone <your-forked-repo-url>
    ```
4. Go to the cloned repository:
    ```bash
    cd methods_lunch_git_intermediate
    ```
5. Run a local HTTP server to view the project:
    ```bash
    python -m http.server
    ```

6. Visit http://localhost:8000 in your browser.
    ```bash
    open http://localhost:8000
    ```

### Step 2: Create a branch for your changes
1. You can use `git branch` to see a list of branches. You should see that there's only one branch and that is the `main`.
2. Create a new branch for your work. Naming the branch after the feature you’re working on is a good practice. For this workshop, name the branch after your attendee profile:
    ```bash
    git checkout -b add-attendee-<your-name>
    ```
    > Replace <your-name> with your actual name. For example:
    > `git checkout -b add-attendee-jane-smith`

    You'll see the message "Switched to a new branch 'add-attendee-<your-name>'".

3. Check that you are now on your new branch by running:
    ```bash
    git branch
    ```
    The current branch will be highlighted with an asterisk (*). You should see your newly created branch as the active one.

### Step 3: Add your attendee profile
1. Navigate to the attendees directory in your local repository.
    ```bash
    cd attendees
    ```
2. Create a new file named attendee_<your_name>.md.
    ```bash
    touch attendee_<your_name>.md
    ```
3. Use the following template to fill out your information:
    ```Markdown
    # Your Full Name
    **Image:** images/<your_name>.jpg 
    **Affiliation:** Your Affiliation  
    **Email:** your.email@example.com
    ## Bio
    Write a brief bio about yourself, including your interests and what you hope to gain from the workshop.
    ```
4. Save a profile image in the `images` directory of the repository with the name `<your_name>.jpg`.

    > Make sure the image file name matches what you specified in your Markdown file.

5. If you refresh the page you'll that you're still not able to see your profile, that's because only attendees listed on the attendees.json file will be shown on the page.

6. Open the `attendees.json` file in a text editor (e.g., `pico attendees.json`). Add the relative path to your new Markdown file to the list. For example:

    ```json
    [
        "attendees/attendee_john_doe.md",
        "attendees/attendee_jane_smith.md",
        "attendees/attendee_<your_name>.md"
    ]
    ```

    > Replace <your_name> with your actual name. Ensure the file follows the correct JSON format, with entries separated by commas.

    <details>
    <summary><b>➕ What is a JSON file?</b></summary>
    
    A JSON file (**JavaScript Object Notation**) is a lightweight data format used to store and exchange information in a structured way. It represents data as key-value pairs or as an ordered list of values.

    In this project, `attendees.json` is used to store the list of Markdown files for all workshop attendees. The JSON file allows the JavaScript script to dynamically load and display each attendee's profile on the web page.

    Here’s an example of a JSON file:
    ```json
    [
        "attendees/attendee_john_doe.md",
        "attendees/attendee_jane_smith.md"
    ]
    ```
    - Each entry in the array represents the file path to a Markdown file in the project.
	- The JSON format is easy to read and widely used in web development for data exchange between a server and a client.

    Make sure to follow the JSON format strictly:
	- Strings should be enclosed in double quotes.
	- Entries in an array should be separated by commas.
    </details>
    </br>
7. Referesh the html page to see the updates.

    > ❗ If your new profile does not appear on the page, it might be due to the HTTP server cache. You can restart the server or change the port to bypass the cache.

### Step 4: Stage, commit, and push your changes
1. Stage your changes to include the new Markdown file, the profile image, and the updated `attendees.json` file in the next commit:
    ```bash
    git add attendees/attendee_<your_name>.md images/<your_name.jpg> attendees.json
    ```
2. Commit your changes with a meaningful message:
    ```bash
    git commit -m "added attendee profile for <your-name> and updated attendees.json"
    ```
3. Push your branch to your forked repository on GitHub:
    ```bash
    git push origin add-attendee-<your-name>
    ```

    > You may encounter permission and authentication errors at this stage. Take a look at [this page](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) for guidance on how to generate and add SSH keys to your GitHub account.
    
### Step 5: Open a pull request
1.	Navigate to your forked repository on GitHub.
2.	Locate your branch (e.g., `add-attendee-<your-name>`).
3.	Click the **Compare & pull request** button next to your branch.
4.	Add a meaningful title and description for your pull request:
	- Title: Add attendee profile for `<your-name>`
	- Description: Summarize the changes you made. 
    
    For example:
	- Added a new profile in the attendees directory.
	- Added a profile image in the images folder.
	- Updated the attendees.json file.

5.	Click **Create pull request** to submit your changes for review.