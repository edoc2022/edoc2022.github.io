import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import SimpleLogoHeader from '../components/SimpleLogoHeader';

import funivia from './../assets/images/funivia-del-renon.jpeg';
import viaDeiProtici from './../assets/images/via-dei-portici.jpeg';
import otzi from './../assets/images/otzi.jpeg';

const Venue = () => (
  <Layout>
    <Header />
    <SimpleLogoHeader />

    <section id="how-to-arrive" className="content-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="text-black mb-4">How to get to Bolzano</h3>

            <p className="text-black text-justify">
              Bolzano is located in the center of the Alps, next to the main
              connection between Italy and Central/Northern Europe at the
              Brenner pass.
              <br />
              <br />
              To arrive by <b>air travel</b>, Bolzano offers a small airport,
              which is connected to some European cities, such as Berlin,
              London, Düsseldorf, etc - see SkyAlps. Otherwise the nearest
              airports to Bolzano are Verona, Innsbruck or Bologna. Other
              well-connected international airports are Milan, Venice, Munich or
              Rome.
              <br />
              <br />
              <b>From Verona:</b> the “Valerio Catullo Airport” airport of
              Verona is connected to the train station of Verona Porta Nuova,
              via the{' '}
              <Link to="https://www.aeroportoverona.it/en/transport/aerobus.html">
                Aerobus 199
              </Link>{' '}
              service. From Verona Porta Nuova station, Bolzano is reachable
              with a single train in around 2 hours. See timetables and book
              tickets on <Link to="http://www.trenitalia.com/">Trenitalia</Link>{' '}
              or <Link to="https://www.italotreno.it/en">Italo</Link>.
              Alternatively,{' '}
              <Link to="https://www.altoadigebus.com/">
                Alto Adige Südtirol Bus
              </Link>{' '}
              offers airport shuttle services between the airport and Bolzano.
              Tickets cost 50€ - 75€. Similar offers are by{' '}
              <Link to="https://www.flixbus.co.uk/">Flixbus</Link>.
              <br />
              <br />
              <b>From Innsbruck:</b> The airport of Innsbruck is easily accessed
              by train or bus. From the train station of Innsbruck you can get
              to Bolzano in around 2 hours. Check the trains schedule{' '}
              <Link to="https://www.oebb.at/en">here</Link>.
              <br />
              <br />
              <b>From Bologna:</b> From the Marconi airport of Bologna you can
              easily reach Bologna Centrale, the main train station, via{' '}
              <Link to="https://www.marconiexpress.it/en/">
                Marconi Express
              </Link>
              . From Bologna train station you can get to Bolzano in about 3
              hours. Check on{' '}
              <Link to="http://www.trenitalia.com/">Trenitalia</Link> or{' '}
              <Link to="https://www.italotreno.it/en">Italo</Link> for the train
              schedule. You can also reach Bolzano by{' '}
              <Link to="https://www.flixbus.co.uk/">Flixbus</Link> buses.
              <br />
              <br />
              <b>From Milan:</b> From Milano Malpensa airport you can easily
              reach Milano Centrale, via{' '}
              <Link to="https://www.malpensaexpress.it/en/?gbraid=0AAAAADDbBSmMixOgJiYORcPpD3IuofZzg&cHash=1bd2ffb0afed2383cd4665316dcbd7ec&gclid=EAIaIQobChMIydethpTm9gIVUgKLCh0hggh0EAAYASAAEgK4O_D_BwE">
                MalpensaExpress
              </Link>
              . The Milano Linate airport is connected to the city centre via
              bus (e.g.{' '}
              <Link to="https://www.milano-aeroporti.it/linate-shuttle/en/index.html">
                linate-shuttle
              </Link>
              ) or metro. From the train station of Milan you can get to Bolzano
              in around 3 hours. Book tickets on{' '}
              <Link to="http://www.trenitalia.com/">Trenitalia</Link> or{' '}
              <Link to="https://www.italotreno.it/en">Italo</Link>.
              Alternatively, Alto Adige Südtirol Bus offers airport shuttle
              services between those airports and Bolzano. Tickets cost 50€ -
              75€. Similar offers are by{' '}
              <Link to="https://www.flixbus.co.uk/">Flixbus</Link>. From
              Bergamo, the best option is to reach Bolzano by{' '}
              <Link to="https://www.flixbus.co.uk/">Flixbus</Link>.
              Alternatively, you may reach either Milano Centrale or Brescia by
              bus (e.g.{' '}
              <Link to="https://www.terravision.eu/italiano/airport_transfer/bus-aeroporto-di-bergamo-milano/">
                Terravision
              </Link>{' '}
              or <Link to="http://www.orioshuttle.com/_eng/">OrioShuttle</Link>
              ), and take a train afterwords.
              <br />
              <br />
              <b>From Venice:</b> Venice has two airports: Venezia Marco Polo
              and Treviso Canova. Both airports are connected through the
              regular bus services to the nearest train stations: Venezia Mestre
              and Venezia Santa Lucia. From the train stations of Venice you can
              get to Bolzano in around 4 hours (see{' '}
              <Link to="http://www.trenitalia.com/">Trenitalia</Link> or{' '}
              <Link to="https://www.italotreno.it/en">Italo</Link>). Deutsche
              Bahn Eurocity operates a train from Venezia Mestre to Bolzano
              Bozen once daily. Tickets cost 27€ - 40€ and the journey takes 2h
              44m. For all other train connections you will have to change in
              Verona Porta Nuova.
              <br />
              <br />
              <b>From Munich:</b> If you arrive in Munich, take the S8 (Metro)
              to the central station. From the central station direct
              international trains (e.g.,{' '}
              <Link to="http://www.bahn.de/">DB Bahn</Link> and{' '}
              <Link to="https://www.obb-italia.com/de/">OBB</Link>) go to
              Bozen-Bolzano every two hours, while a cheaper option are buses
              operated by <Link to="https://www.flixbus.co.uk/">Flixbus</Link>.
              <br />
              <br />
              <b>From Rome:</b> from Rome, both Trenitalia and Italo offers
              trains that takes you to Bolzano in 5 hours. Tickets cost about
              100€ for a one-way ticket. Check{' '}
              <Link to="http://www.trenitalia.com/">Trenitalia</Link> or{' '}
              <Link to="https://www.italotreno.it/en">Italo</Link> for more
              information.
              <br />
              <br />
              To arrive <b>by train</b>, check out{' '}
              <Link to="http://www.trenitalia.com/">www.trenitalia.it</Link> and{' '}
              <Link to="https://www.italotreno.it/en">www.italotreno.it</Link>{' '}
              for more information and options. The train station is only a few
              minutes walking from the city center.
              <br />
              <br />
              Coming by car, use the Brennero A22 motorway and take the exit
              Bolzano-Sud if you come from the South (Verona - Trento), and
              Bolzano-Nord if you come from the North (Munich - Innsbruck). The
              closest parking places are behind the Central Station (City
              Parking Bolzano). Tickets cost 1,50€ - 2,50€ per hour, depending
              on how close the parking lot is to the city center.{' '}
              <Link to="https://www.bolzano-bozen.it/images/come-arrivare/Parcheggi_Parken_Parking_2018.pdf">
                Here
              </Link>{' '}
              is a list of the public parking lots.
              <br />
              <br />
              For getting Bolzano <b>by bus</b>, please check out the following
              service providers:{' '}
              <Link to="http://www.altoadigebus.com">www.altoadigebus.com</Link>
              , <Link to="http://www.flixbus.it">www.flixbus.it</Link>,{' '}
              <Link to="http://www.busgroup.eu">www.busgroup.eu</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default Venue;
