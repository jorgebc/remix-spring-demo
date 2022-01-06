import {Link, useLocation} from 'remix'
import {Disclosure} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import {classNames} from '~/utils/class-names'
import {MobileProfile, ProfileDropdown} from '../profile'

const NAVIGATION = [{name: 'Campañas', to: 'campaigns'}]

function NavLink({
  to,
  ...rest
}: Omit<Parameters<typeof Link>['0'], 'to'> & {to: string}) {
  const location = useLocation()
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`/front/${to}`)
  return (
    <Link
      to={to}
      prefetch="intent"
      className={classNames(
        isSelected
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'px-3 py-2 rounded-md text-sm font-medium',
      )}
      aria-current={isSelected ? 'page' : undefined}
      {...rest}
    />
  )
}

function MobileMenuLink({
  to,
  ...rest
}: Omit<Parameters<typeof Link>['0'], 'to'> & {to: string}) {
  const location = useLocation()
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`/front/${to}`)
  return (
    <Disclosure.Button
      as={Link}
      to={to}
      prefetch="intent"
      className={classNames(
        isSelected
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'block px-3 py-2 rounded-md text-base font-medium',
      )}
      aria-current={isSelected ? 'page' : undefined}
      {...rest}
    />
  )
}

export function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({open}) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {NAVIGATION.map(item => (
                      <NavLink key={item.to} to={item.to}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center ml-4 md:ml-6">
                  <button
                    type="button"
                    className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  <ProfileDropdown />
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAVIGATION.map(item => (
                <MobileMenuLink key={item.to} to={item.to}>
                  {item.name}
                </MobileMenuLink>
              ))}
            </div>
            <MobileProfile />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
