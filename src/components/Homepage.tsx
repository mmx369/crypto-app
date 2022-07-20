import { Col, Row, Statistic, Typography } from 'antd'
import millify from 'millify'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

interface GlobalStats {
  total: number
  total24hVolume: number
  totalExchanges: number
  totalMarketCap: number
  totalMarkets: number
}

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery()

  console.log(data)

  const globalStats = data?.data?.stats as GlobalStats

  if (isFetching) return <div>'Loading...'</div>

  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24th Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  )
}

export default Homepage
