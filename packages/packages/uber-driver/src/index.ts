import packageJSON from '../package.json'
import { Experience, ExperienceOptions } from '@/index'
import icon from '@/icons/uber.png'
import viewBlocks from './blocks'

const options: ExperienceOptions = {
  dataPortal: 'https://myprivacy.uber.com/privacy/exploreyourdata/download',
  dataSamples: ['uber-driver-sample.zip'],
  files: {
    driver_trips: '**/(driver_lifetime_trips-0.csv|Trip*.csv)',
    driver_points: '**/(driver_app_analytics-0.csv|*Driver Detailed*.csv)',
    driver_payments: '**/driver_payments-0.csv',
    rider_trips: '**/trips_data.csv',
    rider_points: '**/(rider_app_analytics-0.csv|*Rider Detailed*.csv)'
  },
  icon: icon,
  title: 'Uber Driver',
  viewBlocks
}

export default new Experience(options, packageJSON, import.meta.url)
