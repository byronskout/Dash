import React from 'react';
import { render } from 'react-dom';
import AudioPlayer from 'react-playlist-player';
import Container from './Container';

class Player extends React.Component {
  state = {
    currentPlayList: {}
  }

  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'https://images.shazam.com/coverart/t440623699-b1441448130_s400.jpg',
        playlistName: 'Summer',
        songs: [
          {
            position: '1',
            songName: 'Breath',
            songUrl: 'https://00e9e64bacefff7a122e86b4bd50aea2e31fab89b99401ea4b-apidata.googleusercontent.com/download/storage/v1/b/1musically12/o/y2mate.com%20-%20camelphat_cristoph_breathe_ft_jem_cooke_0MPFz6o_u14.mp3?qk=AD5uMEum0F2mSTSgBA6H34HibDq4iOhDdl_eY9JsbM7RQSifosIZSaSD9nkdhZEwzIiCCNRC1fONQAtx_5yFFT5Qs5yHtG8wi352rg_RRx-Xzax9TAYZpdXW-YjA3BVM2hYQBXj-cQmo77EJiSKSLfQSZ0dz2VbuJEQidVSF7amgfeqNi2tyCeN0zcIVLLEA7ZzbQayYvo2N183_EyBLM6k1_OFUTe0fEXbd-E2Kt_fq4Bgwgk-OWlzJv-ZBwYIiVJzr5eTRbmB7z9penUudAAvHvA_a8IrzMW42u28I45NKWxgd72rA5Xz4YQs8WuS4kJga7ufxJ5bR3b3ZmiSO5wLwUgKloRAEMufaDwOfRfbhIe3-Tlo6wIUcrz6MTGOHkeGmsDxPQqRR5GNADU2ecFlN0ydxwtnxRB8EO3vMee4L6ULNNu4m14Q72FQmiPgJpv3mAAue93AaS3DyOrdMAWnSUaBQv7aLmse5L-ceqsSIhGaO0gPP6A5vWjxUt-tibdnXAidGITfkkHFaBlUK27nCpyr2LijE5XvHjo2QWQ8I7eLceLliKWIjmLR69UikagRPxtoDL5fHmy8QgYwJbmusL_GVVpwo38kdSOXPeVt_Vu3f-r2D4CtgZxu49E3ehz0S1rJLvgbhHbD9LBWxMDoKBmUVUpFk-psMRVqAaM5C9oGgGvNypmXZhxd-B3qAsQXDogDbGpKqVYkrf_A1hBSVH4uW3llwzF3xI-i4dsXh9aLC1A5FOe-REBU9aW6Zf1YeklSvii0MmqkpmLyJNkKVYAJRpCcOVr1h-mbVkTLN2Wf9H56v32a2hu-J6zYxNmCDFS7jaDVYTqQ-kCUoeZtXotr1yVE4XQ'
          },
          {
            position: '2',
            songName: 'Even',
            songUrl:
              'https://firebasestorage.googleapis.com/v0/b/devsarmico-heavycol.appspot.com/o/audios%2F02%20-%20Even%20Flow.mp3?alt=media&token=a2fa2b54-337f-4097-ba16-38e2283588be'
          },
          {
            position: '3',
            songName: 'Cali',
            songUrl:
              'https://00e9e64bac800e1efcce1e98834952f279e9151f8f18ce523d-apidata.googleusercontent.com/download/storage/v1/b/1musically12/o/y2mate.com%20-%20jungle_heavy_california_w4LkSRXrK34.mp3?qk=AD5uMEsRFtmKHtxZpG-GlSeM3znUVZd0qKvkC9vclnD2hRFYjrtpMwp3AbuMfVDAr5VyOe4vLZDs-FItXhxcqur7YIDmSPCsJrlLPkyp6ORX4t7b6x3EtKZ0s9ELCYAa-A9FbrDFtv2ShzNAY9y90E2m9duG9usGvv08TvN9lXC3_JR2YOCHgOwhn7YHoALdK4gLWfYGVhq4UEIV3BaoDrhC_XNPvplegqHFCPqbIAbGlTunt9bdjQXxjG9C1IV_AN4iGWB7Zz0y2NC8VA7Puevs7QXECMuvLEm_eBZZvXlXD3rVSPB-E11sQoGXifzKZ9tbZjuJh7HyNUBiE-MCmHmEpRBbHcG039b0TRLAxHYgCYCuEKyZVz7yQg1BZ3ndXBHb4DDBuScMMflFyfveRW7GyCDsNwO2eXF5YCEk162HEMfMJss_MPCBS0l9oOdg8EDeMqIyH_ZF0pow8bhriDcb0rstLVrMq1H6bfH2G2XKd71mMMIpTuqrPorVZmdDOgS2hIlZ1-ccZKSfFJ938hPzpp4V-5HSxFNcJLSsYhJzhG07BZoCpQEL51jCVN9Ix8H33RooZpwft5QiMGpxNPTznULsafhLiiBtTZPbFJxzeu2X5hLNjA_HI1Zr-7EDbuY93WxBpw_AvK_kmuyWWgHH8cMhTsDW7aJdG3PIxbjYLg9pgnGz9X8kxtm8t8AKMeVICi6zuD3TBx7LivYSaR4Wr6P-LaBhyJqAwlOTEXxkncD59sOoxWCVvHsfLPFy6Ft-0Z9G5VOBmO9SJvxa0pm1byAvSARn3wAF94X7yATmDY9lkux15SWWLkQGXLeo6jIOVKYo_6RG'
          },
          {
            position: '4',
            songName: 'Primal',
            songUrl:
              'https://00e9e64bace7b697d91d95af4a7cb3d94ecbf12e0f3ee7c312-apidata.googleusercontent.com/download/storage/v1/b/1musically12/o/y2mate.com%20-%20gorgon_city_primal_call_4Ys3VS82MLo.mp3?qk=AD5uMEtsQPeVuetRcherATrveiMLhDW-2ZHOzVHNkBZCehB2bkBYhJFXya2_wZwDM9iU_WL6hr8IwUdPc6_uEEQW9SM7hQyGcJ7xD2Jtl8DxSvkjQXi_ksC9QBTJAQr1hUl3kzPTk4Kiaff0FFJ9EHL-Zrr0SD8NX7Cr06Ib4sG0cTmdiq1WOQEVdDMifrmIKrAJOgqD5Ja5MGKlFIBQj5qNxkH5GJNxKX39q7I-ZdzE4BuCcOqx30wfBl0F7O5dMORttUh4XkJZRsWL0f7yEgOLSu7iAtnRmCUEIxpXwNlEoMF4J5DQMOLpA_WqqXh_Qgy8sEvq5Jw3fBsLvav9-embrGsYdLn0kMXd4CsxLSBU3bcUmzenTtMWWMmjUoCYkmnHp1dj2qnwB6mTczqqEZscthLVQ5hGSNdzEfB7HNxSsn7seainya7GA_6rz94D-cfislhL1T7hOod7VwyMd3TgA78KHuK460gMmzx9XHEI_7z5oPmhj7fwv1FCVjrw21SrQnIlylHqwCZ8_PVizJq_27e685PnAdw_y5UJR80Sohqbq2ueJhjji0_eGs6LYuWQFtGnKNf8Pby3EYkQrmng-qNb6TdA6bQcy8O0GkyVe--28C_qGELOMUv5Gb62Jgq7cfKdFY_tC-YGxoqAEeu_o8Lrdc3h7wIVp_CK7YJqrVXHCXaQ3qFkSkRUv2femNTOpwmIBZ1nGb1H2jIIa-1n7jjvDV8qyjDCiwsqRINvxTdIPlVgcXRH7OW-4OGngd3qzYnMT8KeMEtRF0exvH1abgAAPddZVmzhJLH2WmlkyTYIVSHQ93ltKdJSXKQDm91xJFeMnfZh'
          },
          {
            position: '5',
            songName: 'Sky',
            songUrl:
              'https://00e9e64bac3fdff20286754a542a90f1faec6d79221f487175-apidata.googleusercontent.com/download/storage/v1/b/1musically12/o/y2mate.com%20-%20gorgon_city_sky_high_LZiaw2FfVmo.mp3?qk=AD5uMEv666TlEpTRuBeLCOpdgyQU-D5DOOnxQXtrVOrqiAJlvBCDbI4y7aOPlfFfCNISQgev2gCJCcnMnnxC_X_C8YGccfXxLZZ5Z6Zwp8aZyDvvbnfJp_5tWSYmnPr0AmW_xEIETRc-RQ6SCnuKXRW6OGdoNbhPoZgz7H42HkKheCplFT-vEYV4_WOAeecmJ2ahmcDpGLeSPIT4IbFIQWxMzTNxGEsxncwwI9zBKh4xFr0p4M4IDiLO-nwXRLw2MEfDT8Kdgjv5z9Omk_MpbS_nUFe24zltnPMH9X-hGr_NxaXxUHDBZ44EElbsNZ_es1p5XjHBJKFCU9ON1LKXjiC8jUocE8eiFQ3zTKZZopLqU6i2vsOzJfJ3WLPmckuyFKhk5UIzjWGXDmnE4Lg2bKcr4CRBrQrD5D7pKRnROumOJgGPVxtBoAzTZP-lDlr8YbRi1ry9RhZi7RLT2iNJXpFrGiBtpT4Djpjc-M2YWgn4uo5aP37y-AYtkstqEuUHm8j9g2XpfB0H9ExJZ1xKtJKKNJP6ac5nUoILemRQA3lwNi-dfOgwjcZXAS-pA9nReY8Inix8t14qFeTrglhpJscUD_741HRjf5rqIEfWDXS4OvxdPrDcOZ_dOXQT-UkCdG-YpHWIqVdktFQcGTdwyrXoN5wcJuBdyDKYBNVhse8KUhVBawQR8fmf_MRedja8oGyPKTQctwqWxVksrLGENt3dbQWZvYzK0qQPzoL8C_0GnmPVhmXs0cKnFv7TYn7BoCJBgpMDnZ24eJwE-pvpsSBYHDEUMciv_WWCAYSPhVnxceNdukwSnAD3nestxus9P0m1YjrSnMfy'
          },
          {
            position: '6',
            songName: 'even flow',
            songUrl:
              'https://firebasestorage.googleapis.com/v0/b/devsarmico-heavycol.appspot.com/o/audios%2F02%20-%20Even%20Flow.mp3?alt=media&token=a2fa2b54-337f-4097-ba16-38e2283588be'
          },
          {
            position: '7',
            songName: 'even flow',
            songUrl:
              'https://firebasestorage.googleapis.com/v0/b/devsarmico-heavycol.appspot.com/o/audios%2F02%20-%20Even%20Flow.mp3?alt=media&token=a2fa2b54-337f-4097-ba16-38e2283588be'
          }
        ],
        type: 'album'
      }
    })

  render() {
    return (
      <div className={'Player'}>
      <Container>
        <button className={'Player__load-btn'} onClick={this.loadPlayList}>
          Load
        </button>
        <img id="playpic" src="https://cdn.dribbble.com/users/1445486/screenshots/3856847/ondas-small.gif"></img>
        <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
        </Container>
        <div id="instafeed">
        </div>
      </div>
    )
  }
}

export default Player;
