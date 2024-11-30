
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

    ![alt text](<instruction_images/Screenshot 2024-11-30 at 3.26.16 PM.png>)
4.	Add a meaningful title and description for your pull request:
	- Title: Add attendee profile for `<your-name>`
	- Description: Summarize the changes you made. 
    
    For example:
	- Added a new profile in the attendees directory.
	- Added a profile image in the images folder.
	- Updated the attendees.json file.

5.	Click **Create pull request** to submit your changes for review.

    ![alt text](<instruction_images/Screenshot 2024-11-30 at 3.30.37 PM.png>)

### Step 6: Review and merge changes
Depending on your role in the repository, you may need to:

1.	If you are a **contributor without direct access**:
	- Submit a pull request as outlined in Step 5.
	- Wait for the repository maintainer or a collaborator to review and approve your pull request.
	- If feedback is provided, make the requested changes on your branch (Do not forget to push them on your remote repo).
    - Your updates will automatically appear in the pull request.
    - Once the pull request is approved, the maintainer will merge it into the main branch.

2.	If you are a **reviewer**:
	- Review the submitted pull request for correctness and adherence to project guidelines:
	    - Check for issues in the code, structure, or content.
	    - Test changes locally if applicable **(by cloning the requester’s forked repository and checking out their branch)**.
	- Provide feedback through comments if needed.
	- Approve the pull request if it meets all requirements or request changes if adjustments are necessary.

3.	If you are a **collaborator**:
    ![alt text](<instruction_images/Screenshot 2024-11-30 at 4.15.44 PM.png>)
	- After ensuring your pull request has been reviewed and approved (if required), you can directly merge your pull request:
	    - Review your changes one last time in the pull request interface.
	    - Click the **Merge pull request** button and confirm the merge.
	- Optionally, delete your branch after the merge:
	    - On GitHub: Click **Delete branch** in the pull request interface.
	    - Locally:
            ```bash
            git branch -d <branch-name>
            git push origin --delete <branch-name>  
            ```

### Step 7: Sync your forked repository with the original
Syncing your fork ensures it stays up-to-date with the main repository. This is essential not only after your pull request is merged but also in the following cases:

1.	When other contributors have made changes: If others have contributed to the main repository since you last synced, you’ll need to pull those updates to avoid conflicts in your future work.
2.	Before starting a new feature or branch: Always sync your fork before starting work on a new branch to ensure you’re building on the latest version of the project.
3.	When fixing merge conflicts: If you encounter conflicts while merging a pull request or branch, syncing with the main repository can help resolve them.

**How to Sync Your Fork:**

1.	If you haven’t already, add the original repository as an upstream remote:
    ```bash
    git remote add upstream https://github.com/AliTafakkor/methods_lunch_git_intermediate.git
    ```
2. Verify the remotes:
    ```bash
    git remote -v
    ```
    You should see:
    ```bash
    origin    https://github.com/<your-username>/methods_lunch_git_intermediate.git (fetch)
    origin    https://github.com/<your-username>/methods_lunch_git_intermediate.git (push)
    upstream  https://github.com/AliTafakkor/methods_lunch_git_intermediate.git (fetch)
    upstream  https://github.com/AliTafakkor/methods_lunch_git_intermediate.git (push)
    ```

3. Pull in changes from the upstream repository:
    ```bash
    git fetch upstream
    ```

    <details>
    <summary> What's the difference between <code>git fetch</code> and <code>git pull</code>?</summary>

    #### **The Key Difference**
    - **`git fetch`** downloads the latest changes from the remote repository but does **not** integrate them into your local branch.
    - **`git pull`** is a combination of `git fetch` and `git merge`, meaning it downloads the changes and immediately merges them into your current branch.

    #### **Detailed Explanation**

    **`git fetch`**
    - Downloads updates from the remote repository (e.g., new commits, branches, tags) but does not alter your local files or branches.
    - It’s a way to check for updates without affecting your current work.
    - After fetching, you can review the updates and decide how to integrate them (e.g., by merging or rebasing).

    *Example Workflow*:
    ```bash
    git fetch origin
    git log origin/main --oneline
    # Review the fetched changes
    git merge origin/main
    ```
    **`git pull`**
    - Combines git fetch and git merge into one command.
    - Automatically downloads and merges changes from the remote branch into your current branch.
    - It’s quicker but less flexible than fetch, as you don’t get a chance to review changes before merging.
    
    *Example Workflow*:
    ```bash
    git pull origin main
    ```

    **When to Use Each**

    <table>
    <thead>
        <tr>
        <th>Command</th>
        <th>Use Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><code>git fetch</code></td>
        <td>When you want to check for updates without changing your local branch.</td>
        </tr>
        <tr>
        <td><code>git pull</code></td>
        <td>When you’re ready to immediately merge remote changes into your branch.</td>
        </tr>
    </tbody>
    </table>

    **Best Practice**

    For safety and control, it’s often better to use git fetch followed by git merge. This allows you to review changes and avoid unexpected merges. If you’re confident in the changes, git pull can save time.

    </details>

4.	Merge Updates into Your Local Branch:
	- Switch to the branch you want to update (usually main):
    ```bash
    git checkout main
    ```
    - Merge the updates from the upstream branch:
    ```bash
    git merge upstream/main
    ```

5. After merging, push the updates to your fork on GitHub:
    ```bash
    git push origin main
    ```

> Best Practices for Syncing:
> - **Sync often**: Regularly sync your fork to minimize merge conflicts and stay up-to-date with the main repository.
> - **Pull before starting work**: Always sync before creating a new branch or making changes to avoid working on outdated code.
> - **Communicate with collaborators**: If working in a team, coordinate with others to ensure everyone is syncing frequently.

### Step 8: Clean Up Your Workspace
It’s better to keep your branches short-lived to avoid clutter and confusion in your repository. Once your work is complete and your pull request has been merged, you should clean up your local and remote branches to maintain an organized workspace.

1.	After your pull request is merged, you can safely delete the feature branch from your local repository:
    ```bash
    git branch -d add-attendee-<your-name>
    ```

2.	You should also remove the branch from your fork on GitHub to avoid clutter:
    ```bash
    git push origin --delete add-attendee-<your-name>
    ```

---
**Congratulations!** 🎉 You’ve completed the workshop and mastered essential Git and GitHub workflows. We hope you’ll use this knowledge to contribute and advance open science. Thank you for participating! 🚀
