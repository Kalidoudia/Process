
## :link: [Tutorial on youtube](https://www.youtube.com/watch?v=RGOj5yH7evk) :link: 

# Git Workflow Starting from `git clone` with Visual Studio Code (Using `git switch`)

If you’re starting from an existing repository by cloning it, here's how to set up Visual Studio Code (VSC) and work with Git in a terminal step-by-step, using the modern `git switch` command.

## 1. Set Up Visual Studio Code for Git

### Prerequisites:

**Install Git:**
- Download and install Git from [git-scm.com](https://git-scm.com).
- Ensure Git is accessible in your command line by typing:
  ```bash
  git --version
  ```

**Install Visual Studio Code (VSC):**
- Download VSC from [code.visualstudio.com](https://code.visualstudio.com).

**Configure Git in VSC:**
- Open VSC and go to **View > Command Palette** or press `Ctrl+Shift+P`.
- Search for `Git: Enable` to confirm Git is activated.

**Set Up Git in the Terminal (First-Time Users):**
- Configure your Git username and email:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

## 2. Clone the Repository

### Steps:

**Copy the Repository URL from GitHub:**
- Navigate to the repository on GitHub.
- Click the green **Code** button and copy the HTTPS or SSH URL.

**Clone the Repository:**
- Open the terminal (integrated in VSC or a standalone terminal) and run:
  ```bash
  git clone https://github.com/your-username/repository-name.git
  ```
  - Replace `your-username` and `repository-name` with the appropriate values.
  - This creates a local copy of the repository in a folder named `repository-name`.

**Navigate to the Repository Folder:**
  ```bash
  cd repository-name
  ```

## 3. Open the Repository in VSC

### Steps:

- Open Visual Studio Code.
- Go to **File > Open Folder**.
- Select the cloned repository folder.
- VSC will detect Git and enable Git-related features, such as tracking changes and commits in the **Source Control** tab.

## 4. Make Changes

### Steps:

- Edit existing files or add new files in the VSC editor.
- Save your changes.

## 5. Check Changes

### Steps:

- Open the terminal in VSC:
  - Click **Terminal > New Terminal** or press `Ctrl+``.
- Run the following command to see the status of your repository:
  ```bash
  git status
  ```
  - This shows modified, added, or untracked files.

## 6. Stage Changes

### Steps:

- Add all changes to the staging area:
  ```bash
  git add .
  ```
  - The `.` stages all modified and new files.

## 7. Commit Changes

### Steps:

- Create a snapshot of your changes with a descriptive message:
  ```bash
  git commit -m "Describe your changes"
  ```

## 8. Push Changes

### Steps:

- Push your changes to the remote repository:
  ```bash
  git push
  ```

## Optional: Create and Push a New Branch

If you’re working on a new feature or task, it’s recommended to create a branch:

### Steps:

**Create and Switch to a New Branch:**
  ```bash
  git switch -c new-branch-name
  ```

**Push the New Branch:**
  ```bash
  git push -u origin new-branch-name
  ```

## Quick Tips for Using Git in VSC

- **Source Control Tab:**  
  Click the **Source Control** icon in VSC to view, stage, and commit changes visually.

- **Integrated Terminal:**  
  Use the integrated terminal in VSC to run Git commands without switching applications.

- **GitLens Extension:**  
  Install the **GitLens** extension in VSC for advanced Git features, such as visualizing commit history and branch comparisons.

## Summary of Commands

| Action                                | Command                          |
|---------------------------------------|----------------------------------|
| Clone a repository                    | `git clone <repository-url>`     |
| Navigate to the repository folder     | `cd repository-name`             |
| Check repository status               | `git status`                     |
| Stage changes                         | `git add .`                      |
| Commit changes                        | `git commit -m "message"`        |
| Push changes                          | `git push`                       |
| Create a new branch                   | `git switch -c branch-name`      |
| Switch to an existing branch          | `git switch branch-name`         |

---