import React from 'react';

import './Ssh.scss';

export default function Ssh (props) {
  return (
    <div className='ssh-container'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-xl-9 pt-5">

            <h1>Configuraciones de Red de VM VirtualBox</h1>

            <p>Cuando se crea la maquina virtual por primera vez, Oracle VM VirtualBox por defecto habilita una tarjeta de red virtual y selecciona el modmo Network Address Translation (NAT) por vos. De este modo la máquina guest (La Máquina Virtual con Debian) puede conectarse con el mundo exterior usando la red de la máquina host (Nuestra compu con Windows) y el mundo exterior puede conectarse con los servicios de la máquina guest que vos elegís hacer visibles afuera de la máquina virtual.</p>
            <p><i>When you first create a virtual machine, Oracle VM VirtualBox by default enables one virtual network card and selects the Network Address Translation (NAT) mode for it. This way the guest can connect to the outside world using the host's networking and the outside world can connect to services on the guest which you choose to make visible outside of the virtual machine.</i></p>

            <p>Esta configuración por defecto es buena para la moyoría de los usuarios de Oracle VM VirtualBox. De todos modos, Oracle VM VirtualBox es extremadamente flexible en como se puede virtualizar la red. Soporta muchas tarjetas de red virtuales por máquina virtual. Las primeras cuatro tarjetas de red pueden ser configuradas en detalle en panel de control de la máquina virtual de VirtualBox. Se puede configurar más tarjetas de red utilizando la línea de comando de VBoxManage.</p>
            <p><i>This default setup is good for the majority of Oracle VM VirtualBox users. However, Oracle VM VirtualBox is extremely flexible in how it can virtualize networking. It supports many virtual network cards per virtual machine. The first four virtual network cards can be configured in detail in the VirtualBox Manager window. Additional network cards can be configured using the VBoxManage command.</i></p>

            <h1>Adaptador puente</h1>

            <p>Con Adaptador Puente, Oracle VM VirtualBox usa un driver de dispositivo en tu máquina host (Nuestra compu con Windows) que filtra los datos del adaptador de red físico. Por lo tanto este driver es llamado un driver de filtro de red. Esto habilita a Oracle VM VirtualBox a interceptar datos desde la red física e inyectar datos adentro de ella, creando efectivamente una nueva interface de red mediante software. Cuando la máquina guest (La Máquina Virtual con Debian) está usando este tipo de interfaz de software nueva, mira a la máquina host aunque es la máqina guest es en que está conectada físicamente a la inteface usando un cable de red. La máquina host puede mandar datos a la máquina guest a travez de esa interfaz y recibir datos de ella. Esto significa que vos podes configurar el ruteo y el puente entre la máquina guest y el resto de tu red. </p>
            <p><i>With bridged networking, Oracle VM VirtualBox uses a device driver on your host system that filters data from your physical network adapter. This driver is therefore called a net filter driver. This enables Oracle VM VirtualBox to intercept data from the physical network and inject data into it, effectively creating a new network interface in software. When a guest is using such a new software interface, it looks to the host system as though the guest were physically connected to the interface using a network cable. The host can send data to the guest through that interface and receive data from it. This means that you can set up routing or bridging between the guest and the rest of your network.</i></p>

            <p>Para más información visitar <a href="https://www.virtualbox.org/manual/UserManual.html#network_bridged" target='_blank' rel='noopener noreferrer'>ESTA</a> página</p>
          </div>
        </div>
      </div>
    </div>
  )
}