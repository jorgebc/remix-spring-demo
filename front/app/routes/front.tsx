import {Outlet} from 'remix'
import {Header} from '~/components/front/header'

export default function Index() {
  return (
    <div className="min-h-full">
      <Header />

      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
