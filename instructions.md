
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

