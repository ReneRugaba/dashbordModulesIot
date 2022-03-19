import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'


export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
   
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../TypeModule'))
    await this.runSeeder(await import('../Quantity'))
    await this.runSeeder(await import('../Module'))
    await this.runSeeder(await import('../VehicleType'))
    await this.runSeeder(await import('../Vehicle'))
    await this.runSeeder(await import('../VehicleModule')),
    await this.runSeeder(await import('../CurrentYear'))
    await this.runSeeder(await import('../TravelTicket'))
    await this.runSeeder(await import('../PassengerCount'))
    await this.runSeeder(await import('../FuelConsumption'))
    await this.runSeeder(await import('../LogsModule'))
    await this.runSeeder(await import('../ErrorsListed'))
  }

}
