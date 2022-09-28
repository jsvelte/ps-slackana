import type { NextPage } from 'next'
import { string } from 'yup'

import Layout from '~/components/templates/HomeLayout'
import ProjectTemplate from '~/components/templates/ProjectTemplate'
import { Add } from '~/shared/icons/AddIcon'
import { ThreeDot } from '~/shared/icons/ThreeDotIcon'
import { projectDataList } from '~/shared/jsons/projectDataList'
import { useState } from "react";
import DropDown from '~/components/templates/DropDown'

const Index: NextPage = () => {
  const [limit, setLimit] = useState<boolean>(false);

  const projectList = projectDataList.slice(0, limit ? projectDataList.length : 12).map((data: any, index: number) => {
    return <ProjectTemplate data={data} key={index} />
  })

  const add = () => {
    console.log('add');
  }

  const filter = (value: string) => {
    console.log(value);
  }

  return (
    <Layout metaTitle="Home">
      <div className="p-8 h-full grid">
        <div className="flex items-center justify-center flex-col gap-16 w-fill">
          <div className='flex flex-col gap-5 items-center justify-center'>
            <p className="text-sm">Tuesday, September 20</p>
            <h1 className="text-3xl">Good afternoon, Abraham</h1>
          </div>

          <div className='w-full'>
            <div className='header px-6 py-3 rounded-t-lg border border-slate-300'>
              <div className='flex flex-row justify-between items-between '>
                <div className='flex flex-row items-center justify-center gap-3'>
                  <div onClick={() => add()} className='hover:bg-slate-100 cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg border-dotted border border-slate-400'>
                    <Add />
                  </div>
                  <h1 className='text-2xl'>Projects</h1>
                </div>
                <DropDown callback={filter}>
                  <div className='hover:bg-slate-100 z-0 cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg border border-slate-500'>
                    <ThreeDot />
                  </div>
                </DropDown>
              </div>
            </div>

            <div className='border-b border-x rounded-b-lg border-slate-300 mobile:grid-cols-1 tablet:grid-cols-2 px-7 py-10 grid grid-cols-3 gap-6 h-px-400 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-400 scrollbar-thumb-rounded-md scrollbar-track-gray-100'>
              {projectList}
              <div onClick={() => setLimit(!limit)} className='text-slate-600 font-medium cursor-pointer flex justify-start items-center'>
                <span>Show {limit ? "less" : "more"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
