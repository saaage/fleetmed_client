import React from 'react'
import Review from 'resources/reviews/Review'
import { mount } from 'enzyme'

describe('<Review />', () => {
  let review

  beforeEach(() => {
    const props = {
      id: 1,
      feedback: 'hello',
      delete: () => {}
    }
    review = mount(
      <Review {...props} />
    )
  })

  afterEach(() => {
    review.unmount()
  })

  it('renders', () => {
    expect(review).to.be.present()
  })
})
