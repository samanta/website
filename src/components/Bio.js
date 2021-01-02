import React from 'react'

export default ({ settings }) => (
  <div>
    <img
      src={settings.author_avatar.imgix_url}
      alt="A photo of {settings.author_name}"
    />
    <p>Written by <b itemprop="author" dangerouslySetInnerHTML={{ __html: settings.author_name }} />, <span itemprop="jobTitle" dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
    </p>

  </div>
)
