ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)

CreateThread(function()
	while true do
        Citizen.Wait(Config.ActualizacionHud)
        local player = PlayerPedId()
        TriggerEvent('esx_status:getStatus', 'hunger', function(status) comida = status.val / 10000 end)
        TriggerEvent('esx_status:getStatus', 'thirst', function(status) bebida = status.val / 10000 end)
        DisplayRadar(false)
        SendNUIMessage({
            action = 'change',
            isVeh2 = false,
            vida = GetEntityHealth(GetPlayerPed(-1)) - 100,
            blindaje = GetPedArmour(GetPlayerPed(-1)),
            comida = comida,
            agua = bebida  
        })
        if IsPedInAnyVehicle(player, false) then
            DisplayRadar(true)
            SendNUIMessage({
                isVeh = true
            })
        end
        if IsControlJustPressed(1, 82) then 
            SendNUIMessage({
                action = 'togglehud'
            })
        end
    end
end)

RegisterNUICallback('close', function(data)
    SetNuiFocus(false, false)
end)

RegisterCommand(Config.CommandConfigHud, function(args, rawCommand, source)
    SendNUIMessage({
        action = "openConfig"
    })
    SetNuiFocus(true, true)
end, false)

RegisterCommand(Config.CommandConfigHudMover, function(args, rawCommand, source)
    SendNUIMessage({
        action = "moverHud"
    })
    SetNuiFocus(true, true)
end, false)

RegisterCommand(Config.CommandToggleHud, function(args, rawCommand, source)
    SendNUIMessage({
        action = "togglehud"
    })
end, false)


-- Noty
RegisterNetEvent('sharky_huds:show_noty')
AddEventHandler('sharky_huds:show_noty', function(data)
    SendNoty(data.text, data.type, data.layout, data.theme, data.timeout)
end)


function SendNoty(text, type, layout, theme, timeout)
    SendNUIMessage({
        action = "noty",
        text = text,
        type = type,
        layout = layout,
        theme = theme,
        timeout = timeout
    })
end
