import React from 'react'
import { mount } from 'enzyme'
import Review from 'resources/reviews/Review'

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
    expect(review).toContain('hello')
  })
})
