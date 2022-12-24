import React from 'react'
import './LinuxPage.css'
export const LinuxPage = () => {
  return (
    <div className='mainContent'>
      
    
    <div className='contentPage'>
        <div className="miniHeader ">
        <h1>Linux Commands </h1>
        <h1 className='imageMain text-center'></h1>
        </div>

        <div className="intro">
            
            <div className="element">
                <p>Linux is a family of open source operating systems that are based on the Linux kernel, an open source software project. Linux is a popular operating system for servers, desktops, and embedded devices because of its stability, security, and flexibility.</p>
                <p>Linux is a Unix-like operating system, which means that it is similar in many ways to other Unix-like operating systems such as macOS and Solaris. Linux is known for its command-line interface, which allows users to enter commands to perform various tasks. It also has a graphical user interface (GUI) that allows users to interact with the operating system using windows, icons, and menus.</p>
                <p>One of the main advantages of Linux is that it is open source, which means that the source code is freely available for anyone to modify and distribute. This has led to the development of a large number of different Linux distributions, each of which has its own unique features and characteristics. Some popular Linux distributions include Ubuntu, CentOS, and Fedora.</p>
                <p>Linux is used in a variety of different contexts, including servers, desktops, laptops, and embedded devices. It is also used in cloud computing, as well as in the development of applications and software. Many open source projects and technologies are developed on and for Linux, and it is a popular choice for developers and system administrators due to its stability, security, and flexibility.</p>
            </div>
        </div>
        <div className="commands" style={{paddingBottom:'5px'}}>
            <div className="command">
            <h2 className='headerOfCommands'>1. ls Command</h2>
            <p style={{marginTop:'20px'}}>ls - List the files and directories in the current directory. This command has many options that can be used to modify its behavior. For example, the -l option displays the files in a long format, including the file permissions, owner, group, size, and modification time.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># ls </span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>2. cd Command</h2>
            <p style={{marginTop:'20px'}}>cd - Change the current working directory. This command is used to navigate the file system. To change to a different directory, you can type cd followed by the path of the directory you want to change to. For example, cd /home/user/documents will change the current directory to the documents directory under the user's home directory.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># cd &lt;directory name&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>3. mkdir Command</h2>
            <p style={{marginTop:'20px'}}>mkdir - Create a new directory. This command is used to create a new directory with a given name. For example, mkdir my_directory will create a new directory called "my_directory" in the current directory.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># mkdir &lt;folder name&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>4. rm Command </h2>
            <p style={{marginTop:'20px'}}>rm - Remove a file or directory. This command is used to delete a file or directory. To delete a file, you can type rm followed by the name of the file. To delete a directory and all its contents, you can use the -r option to remove the directory and its contents recursively.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># rm &lt;file name&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>5. pwd Command </h2>
            <p style={{marginTop:'20px'}}>The pwd (print working directory) command is used to display the full path of the current working directory in Linux and other Unix-like operating systems. It is a useful command for displaying the current location in the file system and for constructing relative paths to other files and directories.

            </p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># pwd </span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>6. cp Command </h2>
            <p style={{marginTop:'20px'}}>cp - Copy a file or directory. This command is used to copy a file or directory from one location to another. To copy a file, you can type cp followed by the source file and the destination file. To copy a directory and its contents, you can use the -r option to copy the directory and its contents recursively</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># cp &lt;source_file&gt; &lt;destination&gt; </span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>7. mv Command </h2>
            <p style={{marginTop:'20px'}}>mv - Move or rename a file or directory. This command is used to move a file or directory from one location to another, or to rename a file or directory. To move a file, you can type mv followed by the source file and the destination file. To move a directory, you can use the -r option to move the directory and its contents recursively.</p>
            <div style={{margin:"3px"}} >To rename a file, you can use the following syntax:</div>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># mv &lt;old name&gt; &lt;new name&gt;</span>
               </code></pre>
              </div>
              <div style={{margin:"3px"}}>To move a file to a different directory, you can specify the source file followed by the destination directory. For example, to move the file file.txt from the current directory to the /home/user/documents directory, you can use the following command:</div>
            <div className="codeBar" style={{marginTop:"3px"}}>
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># mv &lt;file.txt &gt; &lt;/home/user/documents&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>8. cat Command </h2>
            <p style={{marginTop:'20px'}}>cat - Concatenate and print the contents of a file. This command is used to display the contents of a file on the terminal. To view the contents of a file, you can type cat followed by the name of the file.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># cat &lt;file name&gt;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>9. grep Command</h2>
            <p style={{marginTop:'20px'}}>grep - Search for a pattern in a file or files. This command is used to search for a specific pattern in one or more files. To search for a pattern, you can type grep followed by the pattern you want to search for and the name of the file or files you want to search in.</p>
            <div style={{margin:"3px"}} >To search for a pattern in a single file, you can use the following syntax:</div>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># grep &lt;pattern file&gt;</span>
               </code></pre>
              </div>
              <div style={{margin:"3px"}}>To search for a pattern that is a regular expression, you can use the -E option to enable extended regular expressions. For example, to search for lines that contain a number followed by the word "error", you can use the following comm</div>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># grep -E "[0-9]*error" file;</span>
               </code></pre>
              </div>
            </div>
            <div className="command">
            <h2 className='headerOfCommands'>10. find Command</h2>
            <p style={{marginTop:'20px'}}>find - Search for files that match a specific criteria. This command is used to search for files that match a specific criteria, such as their name, size, or modification time. To search for files, you can type find followed by the criteria you want to search for and the location you want to search in.</p>
            <div style={{margin:"3px"}} >To search for files with a specific name, you can use the following syntax:</div>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># find path -name "pattern"</span>
               </code></pre>
              </div>
              <div style={{margin:"3px"}} >To search for files with a specific file type, you can use the -type option followed by the file type. For example, to search for directories with the name "my_directory" in the current directory and its subdirectories, you can use the following command:</div>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># find . -type d -name "my_directory"</span>
               </code></pre>
              </div>
            </div>
            
          
          
        </div>
        <div className="endingLine" style={{marginTop:"1em"}}>
        <h1 className='headerOfCommands'>conclusion</h1>
         <p>These are just a few of the many commands available in Linux. There are also many options and flags that can be used with these commands to modify their behavior. To learn more about a specific command, you can use the man command to view its manual page. For example, to learn more about the ls command, you can type man ls at the command prompt</p>
        </div>

    </div>
    </div>
  
  )
}
