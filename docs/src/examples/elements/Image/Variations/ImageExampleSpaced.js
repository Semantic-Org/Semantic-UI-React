import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const ImageExampleSpaced = () => (
  <div>
    <Segment>
      <p>
        Te eum doming eirmod, nominati pertinacia{' '}
        <Image src={src} size='mini' spaced /> argumentum ad his. Ex eam alia
        facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
        referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
        electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
        Mei ex natum rebum iisque.
      </p>
    </Segment>
    <p>
      <Image src={src} size='mini' spaced='right' />
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
      definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
      phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
      phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
      facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
      porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
      everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
      per, quas minimum postulant per id.
      <Image src={src} size='mini' spaced='left' />
    </p>
  </div>
)

export default ImageExampleSpaced
