import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../Navbar'


test("Navbar should show 'FleetMED'", () => {

  const navbar = shallow(
    <Navbar />
  )

  expect(navbar.text()).toContain('FleetMED')

})
