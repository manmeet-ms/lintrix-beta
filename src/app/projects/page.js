
import { FloatingHeader } from '@/components/floating-header'
import { GradientBg2 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ProjectCard } from './project-card'
import { Button } from '@/components/ui/button'
import { Download, DownloadIcon } from 'lucide-react'
import {WEB_ProjectCategories
  ,WP_ProjectCategories
  ,UI_ProjectCategories
  ,OTHER_ProjectCategories} from "../../lib/constants"

  
  export default async function Projects() {


  return (
    <ScrollArea useScrollAreaId>
      <GradientBg2 />
      <FloatingHeader scrollTitle="Projects" />
      <div className="content-wrapper">
        <div className="content">
          <div className='flex items-start justify-between' >
          <PageTitle title="Projects" />
          <a target='_blank' href='/manmeetsingh-resume.pdf' download>
<Button className="inline-flex gap-2 items-center justify-center" >
    <DownloadIcon  size={14} strokeWidth={3} />
    Resume
</Button>
</a>
          </div>
          Projects made so far
          Projects by Manmeet Singh <span className='bg-slate-400/30 font-medium rounded px-1 py-0.5' ><code>@manmeet-ms</code></span> .
Explore the categorized content below or use the  above for all demos and mockups.
Click the  next to each project to view live projects.
          <div>
            <section className="body-font py-12 text-slate-600">
              <div className="container mx-auto ">
                
                <div className="-m-4 flex flex-wrap">
                  {WEB_ProjectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                  {WP_ProjectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                  {UI_ProjectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                  {OTHER_ProjectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                </div>
                
         
              </div>
            </section>
          </div>
          <div>
          
          </div>
          <div>
           
          </div>
          <div>
         
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
