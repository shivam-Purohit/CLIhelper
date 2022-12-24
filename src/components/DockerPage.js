import React from 'react'
import './DockerPage.css'

export const DockerPage = () => {
  return (
    <div className='mainContent'>
      
    
    <div className='contentPage'>
        <div className="miniHeader ">
        {/* <h1>Docker Commands </h1> */}
        <h1 className='imageMain text-center'></h1>
        </div>

        <div className="intro">
            
            <div className="element">
                <p>Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, the developer can be sure that the application will run on any other machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.</p>
              <p>Docker allows developers to create, deploy, and run applications using containers in a consistent way, regardless of the infrastructure environment. This makes it easier for developers to build and deploy applications, as they can be sure that their application will run in any environment, including on their own laptops, in a testing environment, and in production.</p>
              <p>Docker is based on open standards, which means that containerized applications can run on any system that supports the standards, including Linux, Windows, and MacOS. This makes it easier for developers to build applications that are portable and can be easily deployed in different environments</p>
              <p>In addition to providing a consistent way to package and deploy applications, Docker also provides a number of tools and services to help manage the deployment and operation of containerized applications, including the Docker Hub, which is a cloud-based registry for storing and sharing container images, and Docker Compose, which is a tool for defining and running multi-container applications.</p>
              </div>
        </div>
        <div className="commands" style={{paddingBottom:'5px'}}>
            <div className="command">
            <h2 className='headerOfCommands'>1. docker run</h2>
            <p style={{marginTop:'20px'}}>docker run: Run a command in a new container. For example, docker run -it ubuntu:18.04 bash will start a new container based on the Ubuntu 18.04 image and run the bash command inside it.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker run  </span>
               </code></pre>
              </div>
         </div>

            <div className="command">
            <h2 className='headerOfCommands'>2. docker start</h2>
            <p style={{marginTop:'20px'}}>docker start: Start one or more stopped containers. For example, docker start my_container will start the container with the name my_container.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker start  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>3. docker stop</h2>
            <p style={{marginTop:'20px'}}>docker stop: Stop one or more running containers. For example, docker stop my_container will stop the container with the name my_container.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker stop  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>4. docker rm</h2>
            <p style={{marginTop:'20px'}}>docker rm: Remove one or more containers. For example, docker rm my_container will remove the container with the name my_container.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker rm  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>5. docker image</h2>
            <p style={{marginTop:'20px'}}>docker images: List all images in the local Docker image registry. For example, docker images will list all available images on the local machine.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker image  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>6. docker pull</h2>
            <p style={{marginTop:'20px'}}>docker pull: Pull an image or a repository from a registry. For example, docker pull ubuntu:18.04 will download the Ubuntu 18.04 image from the Docker Hub registry.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker pull  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>7. docker push</h2>
            <p style={{marginTop:'20px'}}>docker push: Push an image or a repository to a registry. For example, docker push my_image will push the image with the name my_image to the registry specified in the ~/.docker/config.json file.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker push  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>8. docker build</h2>
            <p style={{marginTop:'20px'}}>docker build: Build an image from a Dockerfile. For example, docker build -t my_image . will build an image with the name my_image using the Dockerfile in the current directory.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker build  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>9. docker exec</h2>
            <p style={{marginTop:'20px'}}>docker exec: Run a command in a running container. For example, docker exec my_container ls will run the ls command inside the container with the name my_container.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker exec  </span>
               </code></pre>
              </div>
         </div>
         
         <div className="command">
            <h2 className='headerOfCommands'>10. docker logs</h2>
            <p style={{marginTop:'20px'}}>docker logs: View the logs of a container. For example, docker logs my_container will show the logs of the container with the name my_container.</p>
            <div className="codeBar">
            <pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># docker logs  </span>
               </code></pre>
              </div>
         </div>

        </div>
        <div className="endingLine" style={{marginTop:"1em"}}>
        <h1 className='headerOfCommands'>conclusion</h1>
         <p>In conclusion, Docker is a tool that allows developers to create, deploy, and run applications using containers. Containers are a way to package up an application with all of the parts it needs, such as libraries and dependencies, and ship it as a single package. This makes it easier to develop and deploy applications, as they can be run in any environment, including on the developer's own laptop, in a testing environment, and in production.</p>
         <p>The top 10 Docker commands are: docker run, docker start, docker stop, docker rm, docker images, docker pull, docker push, docker build, docker exec, and docker logs. These commands allow you to perform various actions, such as running a command in a new container, starting and stopping containers, removing containers, listing and pulling images from a registry, pushing images to a registry, building an image from a Dockerfile, executing a command in a running container, and viewing the logs of a container.</p>
         <p>I hope this summary helps to give you a good understanding of Docker and how it can be used to manage and deploy containerized applications. If you have any further questions about Docker or any of the commands mentioned, don't hesitate to ask!</p>
        </div>

    </div>
    </div>
  
  )
}
