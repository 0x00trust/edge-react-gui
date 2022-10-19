import { describe, expect, it } from '@jest/globals'
import * as React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'

import { CreateWalletSelectCryptoScene } from '../../components/scenes/CreateWalletSelectCryptoScene'
import { rootReducer } from '../../reducers/RootReducer'
import { fakeNavigation } from '../../util/fake/fakeNavigation'

describe('CreateWalletSelectCrypto', () => {
  const mockState: any = {
    core: {
      account: {
        currencyConfig: {
          ethereum: {
            currencyInfo: {
              currencyCode: 'ETH',
              displayName: 'Ethereum',
              pluginId: 'ethereum'
            },
            builtinTokens: {
              '1985365e9f78359a9b6ad760e32412f4a445e862': {
                currencyCode: 'REP',
                denominations: [{ name: 'REP', multiplier: '1000000000000000000' }],
                displayName: 'Augur',
                networkLocation: { contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862' }
              },
              '221657776846890989a759ba2973e427dff5c9bb': {
                currencyCode: 'REPV2',
                denominations: [{ name: 'REPV2', multiplier: '1000000000000000000' }],
                displayName: 'Augur v2',
                networkLocation: { contractAddress: '0x221657776846890989a759BA2973e427DfF5C9bB' }
              },
              '2e91e3e54c5788e9fdd6a181497fdcea1de1bcc1': {
                currencyCode: 'HERC',
                denominations: [{ name: 'HERC', multiplier: '1000000000000000000' }],
                displayName: 'Hercules',
                networkLocation: { contractAddress: '0x2e91E3e54C5788e9FdD6A181497FDcEa1De1bcc1' }
              },
              '6b175474e89094c44da98b954eedeac495271d0f': {
                currencyCode: 'DAI',
                denominations: [{ name: 'DAI', multiplier: '1000000000000000000' }],
                displayName: 'Dai Stablecoin',
                networkLocation: { contractAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F' }
              }
            }
          }
        },
        currencyWallets: {
          '123SomeWalletId': {
            currencyInfo: {
              currencyCode: 'ETH',
              displayName: 'Ethereum',
              pluginId: 'ethereum'
            }
          }
        }
      }
    }
  }
  const store = createStore(rootReducer, mockState)

  it('should render with loading props', () => {
    const navigation = fakeNavigation

    const actual = renderer.create(
      <Provider store={store}>
        <CreateWalletSelectCryptoScene navigation={navigation} />
      </Provider>
    )

    expect(actual).toMatchSnapshot()
  })
})