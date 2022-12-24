import React from 'react'
import './Gitpage.css'
export const Gitpage = () => {
  return (
    <div className='mainContent'>
      
    
    <div className='contentPage'>
        <div className="miniHeader ">
        <h1>Git Commands </h1>
        <h1 className='imageMain text-center'></h1>
        </div>

        <div className="intro">
            
            <div className="element">
                <p>The Git command-line interface (CLI) is a set of commands that you can use to interact with Git from the terminal or command prompt. Using the Git CLI, you can perform various version control tasks such as creating and cloning repositories, committing changes, pushing and pulling from remote repositories, and managing branches.</p>
                <p>To use the Git CLI, you will need to have Git installed on your system. You can then open a terminal or command prompt and enter Git commands as needed.</p>
                <p>The Git CLI allows you to perform a wide range of version control tasks, including:</p>
                <ul>
                  <li><p>Initializing a new Git repository</p></li>
                  <li><p>Adding and committing changes to a repository</p></li>
                  <li><p>pushing and pulling changes to and from remote repositories</p></li>
                  <li><p>Managing branches and merging changes between branches</p></li>
                  <li><p>Viewing the commit history of a repository</p></li>
                  <li><p>Stashing changes temporarily</p></li>
                  </ul>
                  <p>The Git CLI is a powerful tool that can be used to manage code repositories and collaborate with others. It is often used by developers to track changes to their code, manage conflicts, and share their work with others. However, it can also be useful for anyone who wants to track changes to files or collaborate with others on projects.</p>
            </div>
        </div>
        <div className="commands" style={{paddingBottom:'5px'}}>
            <div className="command">
            <h2 className='headerOfCommands'>1. clone Command</h2>
            <p style={{marginTop:'20px'}}>git clone: This command is used to create a local copy of a repository that is hosted remotely. When you clone a repository, you will download all of the files and commit history from the remote repository to your local machine. This is useful if you want to work on a project that is hosted on a remote server, or if you want to create a backup copy of a repository.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git clone &lt;remote repository&gt; </span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>2. add Command</h2>
            <p style={{marginTop:'20px'}}>git add: This command is used to add one or more files to the staging area. The staging area is a temporary location where you can prepare files for a commit. When you add a file to the staging area, you are telling Git that you want to include the changes made to that file in the next commit. You can add multiple files to the staging area at once by specifying them as arguments to the git add command.</p>
            <div style={{margin:"3px"}} >Here is an example of how to use the git add command to add a single file to the staging area:</div>

            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git add &lt;file name&gt;</span>
               </code></pre>
              </div>
            <div style={{margin:"3px"}} >You can also use the git add command to add multiple files to the staging area at once by specifying them as arguments to the command:</div>


         <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git add &lt;file name&gt; &lt;file name&gt; &lt;file name&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>3. commit Command</h2>
            <p style={{marginTop:'20px'}}>git commit: This command is used to save your changes to the local repository. When you commit, you should include a commit message that describes the changes you made. This message is important because it helps you and others understand the changes that were made and why they were made. When you commit, all of the files that are in the staging area will be included in the commit.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git commit -m  &lt;message&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>4. push Command </h2>
            <p style={{marginTop:'20px'}}>git push: This command is used to send your local commits to a remote repository. This is typically used to share your changes with others or to back up your work. When you push to a remote repository, you will need to specify the name of the remote repository and the branch that you want to push to.</p>
            <div style={{margin:"3px"}} >Here is an example of how to use the git push command to push your local commits to a remote repository:</div>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git push origin master</span>
               </code></pre>
              </div>
              <p>In this example, the git push command will push all of the commits on the local master branch to the origin remote repository. The origin repository is typically the default name for the remote repository that is associated with your local repository.</p>
              <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git push -u origin &lt;new-branch&gt; </span>
               </code></pre>
              </div>
              <p>In this example, the git push command will push the new-branch branch to the origin remote repository and set the upstream tracking relationship so that future git push and git pull commands will be simpler.</p>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>5. pull Command </h2>
            <p style={{marginTop:'20px'}}>git pull: This command is used to retrieve updates from a remote repository and merge them with your local repository. This is typically used to get the latest version of the code when working with others. When you pull from a remote repository, you will need to specify the name of the remote repository and the branch that you want to pull from.

            </p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git pull origin master </span>
               </code></pre>
              </div>

            </div>
            <div className="command">
            <h2 className='headerOfCommands'>6. branch Command </h2>
            <p style={{marginTop:'20px'}}>git branch: This command is used to create, list, or delete branches in a repository. Branches are used to work on multiple features or fixes simultaneously without affecting the main branch of the repository. When you create a branch, you can specify a name for the branch. You can then switch to the new branch using the git checkout command.</p>
            <p><span>&#8226;</span> To create a new branch:</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git branch &lt;new branch&gt; </span>
               </code></pre>
              </div>
            <p><span>&#8226;</span> To list all branches in a repository:</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git branch</span>
               </code></pre>
              </div>
            <p><span>&#8226;</span> To delete a branch:</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git branch -d &lt;old branch&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>7. merge Command </h2>
            <p style={{marginTop:'20px'}}>git merge: This command is used to merge two or more branches together. This is typically used to combine the changes made in separate branches into a single branch. When you merge two branches, Git will automatically attempt to resolve any conflicts that may exist between the two branches. If conflicts are found, you may need to manually resolve them before the merge can be completed.</p>
            
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git merge &lt;new feature&gt; </span>
               </code></pre>
              </div>
             
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>8. stash Command </h2>
            <p style={{marginTop:'20px'}}>git stash: This command is used to temporarily save changes that have not been committed and switch to a different branch. This is useful when you need to switch branches for a short period of time but don't want to commit your changes. When you switch back to the original branch, you can use the git stash apply command to reapply the stashed changes.</p>
            <p>1.Run the git stash command to save your changes:</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git stash </span>
               </code></pre>
              </div>
            <p>2.Run the git checkout command to switch to the new-feature branch:</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git checkout &lt;new-feature&gt;</span>
               </code></pre>
              </div>
            <p>3.When you are ready to return to your previous work, you can use the git stash pop command to apply the stashed changes and remove them from the stash:</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git stash pop </span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>9. log Command</h2>
            <p style={{marginTop:'20px'}}>git log: This command is used to view the commit history of a repository. This is useful for seeing who made changes and when they were made. By default, git log will show you the commit messages and the authors of the commits. You can use various options to customize the output of the git log command, such as showing the full commit messages or limiting the number of commits that are displayed.</p>
            
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git log </span>
               </code></pre>
              </div>
              
            
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>10. status Command</h2>
            <p style={{marginTop:'20px'}}>The git status command is used to view the current status of your Git repository. When you run this command, Git will display a list of the files that have been modified but not yet committed, as well as any untracked files that are not being tracked by Git.</p>
            
             <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># git status</span>
               </code></pre>
              </div>
            </div>
            
          
          
        </div>
        <div className="endingLine" style={{marginTop:"1em"}}>
        <h1 className='headerOfCommands'>conclusion</h1>
         <p>In summary, Git is a powerful version control system that allows you to track changes to your code and collaborate with others. There are many Git commands that you can use to perform various version control tasks, such as creating and cloning repositories, committing changes, pushing and pulling from remote repositories, and managing branches.</p>
         <p>Using the Git command-line interface (CLI) or a graphical user interface (GUI), you can effectively manage your code repositories and collaborate with others on projects. Git is widely used in the software development industry, but it can also be useful for anyone who wants to track changes to files or collaborate with others on projects.</p>
         <p>To get started with Git, you will need to install it on your system and create a new repository using the git init command. From there, you can use the various Git commands to track your changes, collaborate with others, and manage your repository. With practice and time, you will become proficient at using Git and will be able to effectively manage your code projects.</p>
        </div>

    </div>
    </div>
  
  )
}
